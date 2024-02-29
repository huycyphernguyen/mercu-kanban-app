namespace KanbanApp.MyApi.Entities;

public enum Stage
{
    Applied, Interviewing, Offered, Hired
}

public class User
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public Stage Stage { get; set; }
    public string[]? Jobs { get; set; }

}