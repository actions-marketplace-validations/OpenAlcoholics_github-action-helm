export enum HelmSubcommand {
    All = "all",
    Install = "install",
    Upgrade = "upgrade",
    None = "",
}

export enum GithubActionInputType {
    Number = "number",
    String = "string",
    Time = "time",
    File = "file",
    Boolean = "boolean",
}

export type GithubActionInputEntryData = {
    description: string
    required: boolean
    default: string
    value: string | boolean | number | undefined
    supported_subcommands: HelmSubcommand[],
    type: GithubActionInputType
};

export type GithubActionInputEntry = {
    name: string
    value: GithubActionInputEntryData
};
