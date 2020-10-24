import React from "react";
import { NavMenu } from "./NavMenu";

export function PageLayout(props: { children: React.ReactNode }) {
    return (
        <div>
            <NavMenu />

            {props.children}

            <div className="text-sm text-center my-4 italic text-gray-600 dark:text-gray-400">
                Brought to you by the {"\u{1f36c}"} Breath Mints.
                <br />
                <a href="https://twitter.com/floofstrid">Author</a> (@Ske#6201) |{" "}
                <a href="https://github.com/Society-for-Internet-Blaseball-Research/Reblase">GitHub</a> |{" "}
                <a href="https://discord.gg/XKppCuj">SIBR Discord</a>
            </div>
        </div>
    );
}
