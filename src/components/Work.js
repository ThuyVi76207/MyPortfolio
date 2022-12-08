import "./WorkCardStyles.css"
import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";


const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading text-[50px] uppercase font-semibold">Projects</h1>
            <div className="project-container">
                {WorkCardData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            description={val.description}
                            source={val.source} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work