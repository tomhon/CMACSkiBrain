namespace SkiBrain.DataAccess
{
    using System;
    using System.Collections.Generic;

    public partial class Parent
    {
        public override bool Equals(object obj)
        {
            if (obj == null)
            { 
                return false;
            }

            if (obj.GetType() != typeof(Parent))
            {
                return false;
            }

            var comparer = (Parent)obj;

            return string.Compare(comparer.Email, this.Email, true) == 0 &&
                string.Compare(comparer.FirstName, this.FirstName, true) == 0 &
                string.Compare(comparer.LastName, this.LastName, true) == 0 &&
                comparer.TenantId == this.TenantId;
        }

        public override int GetHashCode()
        {
            return this.Email.GetHashCode() + this.FirstName.GetHashCode() + this.LastName.GetHashCode() + this.TenantId.GetHashCode();
        }
    }
}
