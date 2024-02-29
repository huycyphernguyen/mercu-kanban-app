namespace KanbanApp.MyApi.Models.Users;

using System.ComponentModel.DataAnnotations;
using KanbanApp.MyApi.Entities;

public class CreateRequest
{
    [Required]
    public string? FirstName { get; set; }

    [Required]
    public string? LastName { get; set; }

    [Required]
    public string? PhoneNumber { get; set; }

    [Required]
    [EnumDataType(typeof(Stage))]
    public string? Stage { get; set; }

    [Required]
    [EmailAddress]
    public string? Email { get; set; }

}