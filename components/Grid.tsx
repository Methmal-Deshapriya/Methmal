import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
const Grid = () => {
  return (
    <section>
      <BentoGrid>
        {[{ title: "title", description: "description", id: 1 }].map(
          (item, index) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
