export const setTheme = (currentTheme) => {
    const selectedCssProps = Array.from(document.styleSheets)
        .reduce((prevStylesheet, currentStyleSheet) =>
            (prevStylesheet = [
                ...prevStylesheet,
                ...Array.from(currentStyleSheet.cssRules).reduce(
                    (prevCssRules, currentCssRules) => {
                        prevCssRules = currentCssRules.selectorText === ":root" ?
                            [
                                ...prevCssRules,
                                ...Array.from(currentCssRules.style).filter((item) =>
                                    item.startsWith("--selected")
                                ),
                            ]
                            : prevCssRules;
                        return prevCssRules
                    },
                    []
                ),
            ]),
          []
        );
        selectedCssProps.forEach((value) => {
            document.documentElement.style.setProperty(
                value,
                `var(--${currentTheme}${value.substring(10)})`
            );
        });
};

