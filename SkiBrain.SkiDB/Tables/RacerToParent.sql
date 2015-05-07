CREATE TABLE [dbo].[RacerToParent] (
    [RacerId]  INT NOT NULL,
    [ParentId] INT NOT NULL,
    CONSTRAINT [PK_RacerToParent] PRIMARY KEY CLUSTERED ([RacerId] ASC, [ParentId] ASC),
    CONSTRAINT [FK_RacerToParent_Parent] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[Parent] ([Id]),
    CONSTRAINT [FK_RacerToParent_Racer] FOREIGN KEY ([RacerId]) REFERENCES [dbo].[Racer] ([Id])
);

