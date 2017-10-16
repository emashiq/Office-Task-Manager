using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Office_Task_Manager.Models;
using Microsoft.AspNetCore.Authorization;

namespace Office_Task_Manager.Controllers
{
    [Produces("application/json")]
    [Route("api/UserAccountRoles")]
    [Authorize(AuthenticationSchemes = "JwtBearer")]
    public class UserAccountRolesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UserAccountRolesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/UserAccountRoles
        [HttpGet]
        public IEnumerable<UserAccountRole> GetUserAccountRoles()
        {
            return _context.UserAccountRoles;
        }

        // GET: api/UserAccountRoles/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserAccountRole([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userAccountRole = await _context.UserAccountRoles.SingleOrDefaultAsync(m => m.Id == id);

            if (userAccountRole == null)
            {
                return NotFound();
            }

            return Ok(userAccountRole);
        }

        // PUT: api/UserAccountRoles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserAccountRole([FromRoute] int id, [FromBody] UserAccountRole userAccountRole)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userAccountRole.Id)
            {
                return BadRequest();
            }

            _context.Entry(userAccountRole).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserAccountRoleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserAccountRoles
        [HttpPost]
        public async Task<IActionResult> PostUserAccountRole([FromBody] UserAccountRole userAccountRole)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.UserAccountRoles.Add(userAccountRole);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserAccountRole", new { id = userAccountRole.Id }, userAccountRole);
        }

        // DELETE: api/UserAccountRoles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserAccountRole([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userAccountRole = await _context.UserAccountRoles.SingleOrDefaultAsync(m => m.Id == id);
            if (userAccountRole == null)
            {
                return NotFound();
            }

            _context.UserAccountRoles.Remove(userAccountRole);
            await _context.SaveChangesAsync();

            return Ok(userAccountRole);
        }

        private bool UserAccountRoleExists(int id)
        {
            return _context.UserAccountRoles.Any(e => e.Id == id);
        }
    }
}