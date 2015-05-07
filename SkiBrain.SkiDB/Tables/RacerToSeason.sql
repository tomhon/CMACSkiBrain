CREATE TABLE [dbo].[RacerToSeason] (
    [RacerId]  INT NOT NULL,
    [SeasonId] INT NOT NULL,
    CONSTRAINT [PK_RacerToSeason] PRIMARY KEY CLUSTERED ([RacerId] ASC, [SeasonId] ASC),
    CONSTRAINT [FK_RacerToSeason_Racer] FOREIGN KEY ([RacerId]) REFERENCES [dbo].[Racer] ([Id]),
    CONSTRAINT [FK_RacerToSeason_Season] FOREIGN KEY ([SeasonId]) REFERENCES [dbo].[Season] ([Id])
);

