
using System.ComponentModel.DataAnnotations;
using KanbanApp.MyApi.Entities;

namespace KanbanApp.MyApi.Models.Users;
public class UpdateRequest
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }

    [EnumDataType(typeof(Stage))]
    public string? Stage { get; set; }

    [EmailAddress]
    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }
}