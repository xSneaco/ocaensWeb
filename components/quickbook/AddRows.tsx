"use client"

export default function AddRows({}) {
    return (
        <div className={"flex flex-col w-full items-center text-left"}>
            <h1 className={"font-bold text-xl"}>Map pool</h1>
            <p>
                If you run out of tournament slots or want to add a 6th player, you can add more rows:
            </p>
            <ul className={"text-left list-disc"}>
                <li>Right click the last row with content (Player 5 / last tournament slot)</li>
                <li>Click "Insert 1 row below"</li>
                <li>Change the reference for the player the 6th player was standing in for in the reflection tab</li>
            </ul>

            <div className={"flex flex-col md:flex-row gap-4 w-full items-center justify-center"}>
                <img
                    alt={"names input"}
                    className={"h-[150px]"}
                    src={"/quickbook/addRow0.png"}
                />
                <img
                    alt={"names input"}
                    className={"h-[150px]"}
                    src={"/quickbook/addRow1.png"}
                />
                <img
                    alt={"names input"}
                    className={"h-[150px]"}
                    src={"/quickbook/addRow2.png"}
                />
            </div>
        </div>
    );
};