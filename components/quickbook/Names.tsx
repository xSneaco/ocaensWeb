"use client"

export default function Names({}) {
    return (
        <div className={"flex flex-col w-full items-center"}>
            <h1 className={"font-bold text-xl"}>Add Team info</h1>
            <p>
                Replace the "Player X" placeholders with the names of your players and the "Team Name" placeholder with your team name.
            </p>
            <img
                alt={"names input"}
                src={"/quickbook/names.png"}
            />
        </div>
    );
};