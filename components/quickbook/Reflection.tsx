"use client"

export default function Reflection({}) {
    return (
        <div className={"flex flex-col w-full items-center"}>
            <h1 className={"font-bold text-xl"}>Add Matches</h1>
            <p>
                After a match, you can add the results here. The reflection tab is processed to fill the stats and profiles tabs.<br></br>
                To get an HLTV rating for the match, you need to fill in Kills, Assists, Deaths, ADR, KAST and the amount of rounds won / lost
            </p>
            <img
                alt={"names input"}
                src={"/quickbook/reflection.png"}
            />
        </div>
    );
};