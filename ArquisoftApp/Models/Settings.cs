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
    
    public partial class Settings
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyId { get; set; }
        public string CompanyAddress { get; set; }
        public string CompanyEmail { get; set; }
        public string CompanyPhone { get; set; }
        public string SMTP_Email { get; set; }
        public string SMTP_Password { get; set; }
        public string SMTP_Server { get; set; }
        public string SMTP_Port { get; set; }
        public Nullable<bool> SMTP_SSL { get; set; }
    }
}
