using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ngrx_effects_be.Controllers
{
    [Produces("application/json")]
    [Route("api/Random")]
    public class RandomController : Controller
    {
        public void Get()
        {
            var random = new Random();
            var d = random.NextDouble();
            if (d >= 0.5)
            {
                throw new Exception("error");
            }
        }
    }
}