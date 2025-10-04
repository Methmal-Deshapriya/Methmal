import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data/index";
const Grid = () => {
  return (
    <section>
      <div className="mb-10">
        <BentoGrid>
          {gridItems.map((item, index) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              img={item.img}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
