
CREATE VIEW [dbo].[U10]
AS
SELECT        dbo.Parent.FirstName, dbo.Parent.LastName, dbo.Parent.Email, dbo.Racer.DateOfBirth
FROM            dbo.RacerToParent INNER JOIN
                         dbo.Racer ON dbo.RacerToParent.RacerId = dbo.Racer.Id INNER JOIN
                         dbo.Parent ON dbo.Parent.Id = dbo.RacerToParent.ParentId
WHERE        (dbo.Racer.DateOfBirth >= '2004-12-31' AND dbo.Racer.DateOfBirth < '2006-12-31')

