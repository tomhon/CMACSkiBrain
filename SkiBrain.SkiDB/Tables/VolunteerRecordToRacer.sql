CREATE TABLE [dbo].[VolunteerRecordToRacer] (
    [VolunteerRecordId] INT NOT NULL,
    [RacerId]           INT NOT NULL,
    CONSTRAINT [PK_VolunteerRecordToRacer] PRIMARY KEY CLUSTERED ([VolunteerRecordId] ASC, [RacerId] ASC),
    CONSTRAINT [FK_VolunteerRecordToRacer_Racer] FOREIGN KEY ([RacerId]) REFERENCES [dbo].[Racer] ([Id]),
    CONSTRAINT [FK_VolunteerRecordToRacer_VolunteerRecord] FOREIGN KEY ([VolunteerRecordId]) REFERENCES [dbo].[VolunteerRecord] ([Id])
);

