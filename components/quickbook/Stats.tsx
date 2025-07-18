"use client"

export default function Stats({}) {
    return (
        <div className={"flex flex-col w-full items-center"}>
            <h1 className={"font-bold text-xl"}>Stats</h1>
            <p>
                The stats tab shows you the performance of your players. You can filter by tournament in the top right corner.<br></br>
                For every position there is a target HLTV rating based on the average rating of players in those position in the top 50 teams.<br></br>
                The Target Δ is the players rating minus the target rating.<br></br>
                A positive Δ means the player performs above expectation, a negative Δ means the player performs below expectation.<br></br>
            </p>
            <img
                alt={"names input"}
                src={"/quickbook/stats.png"}
            />
        </div>
    );
};