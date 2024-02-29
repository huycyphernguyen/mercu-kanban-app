
using AutoMapper;
using KanbanApp.MyApi.Entities;
using KanbanApp.MyApi.Helpers;
using KanbanApp.MyApi.Models.Users;
using KanbanApp.MyApi.Repositories;

namespace KanbanApp.MyApi.Services;
public interface IUserService
{
    Task<IEnumerable<User>> GetAll();
    Task<User> GetById(int id);
    Task Create(CreateRequest model);
    Task Update(int id, UpdateRequest model);
}

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public UserService(
        IUserRepository userRepository,
        IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
    }

    public async Task<IEnumerable<User>> GetAll()
    {
        return await _userRepository.GetAll();
    }

    public async Task<User> GetById(int id)
    {
        var user = await _userRepository.GetById(id);

        if (user == null)
            throw new KeyNotFoundException("User not found");

        return user;
    }

    public async Task Create(CreateRequest model)
    {
        if (await _userRepository.GetByEmail(model.Email!) != null)
            throw new AppException("User with the email '" + model.Email + "' already exists");

        var user = _mapper.Map<User>(model);

        await _userRepository.Create(user);
    }

    public async Task Update(int id, UpdateRequest model)
    {
        var user = await _userRepository.GetById(id) ?? throw new KeyNotFoundException("User not found");

        var emailChanged = !string.IsNullOrEmpty(model.Email) && user.Email != model.Email;
        if (emailChanged && await _userRepository.GetByEmail(model.Email!) != null)
            throw new AppException("User with the email '" + model.Email + "' already exists");

        _mapper.Map(model, user);

        await _userRepository.Update(user);
    }
}