import * as React from "react";
import {Listbox, ListboxItem, ListboxSection} from "@heroui/listbox";

interface ChangelogVersionUpdateProps {
    updates: string[];
}

export function ChangelogVersionUpdate({ updates }: ChangelogVersionUpdateProps) {
    return (
        <Listbox>
            <ListboxSection>
                {updates.map((update, index) => (
                    <ListboxItem key={index} textValue={update}>
                        {update}
                    </ListboxItem>
                ))}
            </ListboxSection>
        </Listbox>
    );
}