import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects({ project, projectImage }) {
  const { title, description, tag1, tag2, tag3, link } = project;
  return (
    <div className="flex">
      <Link href={link}>
        <div className="bg-custom-dark p-10 max-w-sm rounded-xl cursor-pointer hover:bg-opacity-75 hover:border-2 hover:border-custom-pink">
          <div className="font-extrabold text-2xl text-custom-light">
            {title}
          </div>
          <br />
          <div className="text-custom-light">{description}</div>
          <br />
          <div className="flex font-semibold">
            <div className="bg-custom-pink p-1 px-2 rounded-3xl mr-2">
              {tag1}
            </div>
            <div className="bg-custom-pink p-1 px-2 rounded-3xl mr-2">
              {tag2}
            </div>
            <div className="bg-custom-pink p-1 px-2 rounded-3xl">{tag3}</div>
          </div>
          <br />
          <Image
            className="rounded-xl"
            src={projectImage} // Assuming 'logo' is a valid URL
            alt="Project Image"
            width={450}
            height={450}
            layout="fixed"
          />
        </div>
      </Link>
    </div>
  );
}
