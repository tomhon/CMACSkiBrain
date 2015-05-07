CREATE TABLE [dbo].[VolunteerRecordToParent] (
    [VolunteerRecordId] INT NOT NULL,
    [ParentId]          INT NOT NULL,
    CONSTRAINT [PK_VolunteerRecordToParent] PRIMARY KEY CLUSTERED ([VolunteerRecordId] ASC, [ParentId] ASC),
    CONSTRAINT [FK_VolunteerRecordToParent_Parent] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[Parent] ([Id]),
    CONSTRAINT [FK_VolunteerRecordToParent_VolunteerRecord] FOREIGN KEY ([VolunteerRecordId]) REFERENCES [dbo].[VolunteerRecord] ([Id])
);

