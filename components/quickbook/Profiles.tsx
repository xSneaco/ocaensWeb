"use client"

export default function Profiles({}) {
    return (
        <div className={"flex flex-col w-full items-center"}>
            <h1 className={"font-bold text-xl"}>Profiles</h1>
            <p>
                Here you can inspect the profiles of your players.<br></br>
                In the top right you can select what kind of tournament and what map you want to filter by.
            </p>
            <img
                alt={"names input"}
                src={"/quickbook/profiles.png"}
            />
        </div>
    );
};