export const arrayFields = [
    {
        id: 0,
        label: "Фамилия",
        inputType: "text",
        field: "lastName",
        err: "Фамилия должна быть длиной от трёх до двадцати символов, только буквы."
    },
    {
        id: 1,
        label: "Имя",
        inputType: "text",
        field: "name",
        err: "Имя должно быть длиной от трёх до двадцати символов, только буквы."
    },
    {
        id: 2,
        label: "Отчество",
        inputType: "text",
        field: "patronymic",
        err: "Отчество должно быть длиной от трёх до двадцати символов, только буквы."
    },
    {
        id: 3,
        label: "Email",
        inputType: "email",
        field: "email",
        err: "Введите корректный email."
    },
    {
        id: 4,
        label: "Пароль",
        inputType: "password",
        field: "password",
        err: "Пароль должен содержать минимум одну цифру, одну большую и маленьку буквы латинского алфавита и быть не короче шести символов."
    },
    {
        id: 5,
        label: "Подтвердите пароль",
        inputType: "password",
        field: "confirmPassword",
        err: "Пароли не совпадают."
    }
]