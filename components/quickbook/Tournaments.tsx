"use client"

export default function Names({}) {
    return (
        <div className={"flex flex-col w-full items-center"}>
            <h1 className={"font-bold text-xl"}>Add Tournaments</h1>
            <p>
                Add the tournaments you want to play in.<br></br>
                If you want to play small weekend cups I recommend using the "Official" tag for them in the reflection tab for readability.
            </p>
            <img
                alt={"names input"}
                src={"/quickbook/tournaments.png"}
            />
        </div>
    );
};