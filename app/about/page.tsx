import { getSettings } from "sanity-utils"
import { PortableText } from "@portabletext/react";

export default async function AboutPage() {
    const settings = await getSettings();

    return (
        <div>
            <h1>{settings.title}</h1>
            <p><PortableText value={settings.about}/></p>
        </div>
    )
}