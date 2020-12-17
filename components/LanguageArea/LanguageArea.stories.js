import { storiesOf } from "@storybook/react";
import { LanguageArea } from "./LanguageArea";

storiesOf("LanguageArea", module).add("with default values", () => {
    return <LanguageArea />;
});
