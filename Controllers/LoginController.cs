using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Office_Task_Manager.ViewModels;
namespace Office_Task_Manager.Controllers
{
    [Route("api/[controller]")]
    public class LoginController:Controller
    {
        public LoginController()
        {

        }
        [AllowAnonymous]
        [HttpPost]
        public IActionResult GenerateToken([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var claims = new[]
                {
                          new Claim(JwtRegisteredClaimNames.Sub, "Test"),
                          new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("@shiq2017jwtw@rking"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken("@shiq2017jwtw@rking",
                  "@shiq2017jwtw@rking",
                  claims,
                  expires: DateTime.Now.AddMinutes(30),
                  signingCredentials: creds);

                return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token) });

            }

            return BadRequest("Could not create token");
        }
    }
}