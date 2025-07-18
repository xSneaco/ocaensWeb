"use client"

export default function Names({}) {
    return (
        <div className={"flex flex-col w-full items-center"}>
            <h1 className={"font-bold text-xl"}>Map pool</h1>
            <p>
                If the map pool changes, you can update it here.<br></br>
                The map pool is used to generate the map pool for the reflection and the veto prep tabs.
            </p>
            <img
                alt={"names input"}
                src={"/quickbook/mappool.png"}
            />
        </div>
    );
};