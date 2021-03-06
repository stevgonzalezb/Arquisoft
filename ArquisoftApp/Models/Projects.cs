//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ArquisoftApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Projects
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Projects()
        {
            this.Attachments = new HashSet<Attachments>();
            this.Budgets = new HashSet<Budgets>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public string SiteArea { get; set; }
        public string ConstructionArea { get; set; }
        public string Levels { get; set; }
        public string ConstructionSystem { get; set; }
        public string MasterBuilder { get; set; }
        public string Comments { get; set; }
        public Nullable<int> IdClient { get; set; }
        public int IdState { get; set; }
        public string Status { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Attachments> Attachments { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Budgets> Budgets { get; set; }
        public virtual Clients Clients { get; set; }
        public virtual State State { get; set; }
    }
}
