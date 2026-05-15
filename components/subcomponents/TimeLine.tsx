import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
        image:"/P1.svg",
      title: "Discovery",
      content: (
        <div>
          <p className="mb-4  text-[#8F8F8F] text-xl">Project Fit Assessment</p>
          <p className="text-lg max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
            We start with a consultation to understand your idea, goals, and
            market. This helps us tailor our services to meet your specific
            needs and ensure a perfect project fit.
          </p>
        </div>
      ),
    },
    {
        image:"/P2.svg",
      title: "Strategic Roadmap",
      content: (
        <div>
          <p className="mb-4  text-[#8F8F8F] text-xl">Planning & Milestones</p>
          <p className="text-lg max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
            Together, we create a customized roadmap outlining each milestone in
            your MVP development journey. We define clear KPIs and technical
            requirements.
          </p>
        </div>
      ),
    },
    {
        image:"/P3.svg",
      title: "Design",
      content: (
        <div>
          <p className="mb-4  text-[#8F8F8F] text-xl">User-Centered Approach</p>
          <p className="text-lg max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
            We begin with in-depth research to understand your users. This
            allows us to create designs that are not only visually appealing but
            also highly functional and intuitive.
          </p>
        </div>
      ),
    },
    {
        image:"/P4.svg",
      title: "Build & Iterate",
      content: (
        <div>
          <p className="mb-4  text-[#8F8F8F] text-xl">Agile Development</p>
          <p className="text-lg max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
            Using the latest tech stacks, we bring your vision to life. We work
            in sprints, allowing for constant feedback and rapid iterations to
            polish the product.
          </p>
        </div>
      ),
    },
    {
        image:"/P5.svg",
      title: "Launch & Support",
      content: (
        <div>
          <p className="mb-4  text-[#8F8F8F] text-xl">Scaling & Maintenance</p>
          <p className="text-lg max-w-1/3 font-normal text-[#8F8F8F] md:text-sm  leading-relaxed">
            We handle the deployment and ensure a smooth rollout. Post-launch,
            we provide ongoing support and optimization based on real user data.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-tranparent dark:bg-black">
      <Timeline data={data} />
    </div>
  );
}
