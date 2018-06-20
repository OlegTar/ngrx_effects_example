using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ngrx_effects_be.Controllers
{
    [Produces("application/json")]
    [Route("api/Layout")]
    public class LayoutController : Controller
    {
        [HttpPost]
        public string Post(string message) => message.ToUpper();
    }
}