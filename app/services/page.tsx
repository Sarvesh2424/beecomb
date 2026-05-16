import Footer from "@/components/Footer";
import PortfolioSection from "@/components/portfolio/Main";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

type PortfolioItem = {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
};

async function getPortfolio(): Promise<PortfolioItem[]> {
  const querySnapshot = await getDocs(collection(db, "portfolio"));

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<PortfolioItem, "id">),
  }));
}

async function page() {
  const portfolio = await getPortfolio();
  return (
    <>
      <PortfolioSection portfolio={portfolio}/>
      <Footer />
    </>
  );
}

export default page;
