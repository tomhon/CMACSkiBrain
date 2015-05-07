
CREATE VIEW [dbo].[U21]
AS
SELECT        dbo.Parent.FirstName, dbo.Parent.LastName, dbo.Parent.Email, dbo.Racer.DateOfBirth
FROM            dbo.RacerToParent INNER JOIN
                         dbo.Racer ON dbo.RacerToParent.RacerId = dbo.Racer.Id INNER JOIN
                         dbo.Parent ON dbo.Parent.Id = dbo.RacerToParent.ParentId
WHERE        (dbo.Racer.DateOfBirth >= '1993-12-31' AND dbo.Racer.DateOfBirth < '1996-12-31')

