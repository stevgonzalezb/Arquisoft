﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ArquisoftApp.Models.ReportsModel
{
    public class BudgetsCreated
    {
        public Users CurrentUser { get; set; }
        public string CompanyName { get; set; }
        public string CompanyAddress { get; set; }
        public string CompanyId { get; set; }
        public string CompanyEmail { get; set; }
        public string CompanyPhone { get; set; }
        public List<Budgets> Budgets { get; set; }
}
}