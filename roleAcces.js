const dataUser = [
    {
        id: 1,
        nama: 'galang',
        password: '123'
    },
    {
        id: 2,
        nama: 'ian',
        password: '1234'
    },
    {
        id: 3,
        nama: 'gilang',
        password: '12345'
    },
]

const accesOwner = {
    lihat: "Melihat data keluar masuk",
    report: "meresponst admin dan user"
}

const accesAdmin = {
    lihat : "Melihat daftar kategori",
    delet : "Menghapus Ktegori",
    tambah : "Menambah kategori",
    edit : "Mengedit Kategori"
}

const accesUser = {
    lihat : "Melihat daftar kategori",
    buy : "Dapat membeli kategori"
}

const token = ~~[Math.random() * 9999]
const roles = ['Admin', 'Owner', 'User']

const createRole = (role) => {
    return new Promise((succes, failed) => {
        setTimeout(() => {
            if (!roles.includes(role)) return failed('Role Tidak Terdaftar')
            if (roles.includes(role)) return succes({ role: role })
        }, 1000)
    })
}

const access = (role) => {
    return new Promise((succes, failed) => {
        setTimeout(() => {
            if (role === "Owner") return succes({acces: accesOwner})
            if(role === "Admin") return succes({acces : accesAdmin})
            if(role === "User") return succes({acces: accesUser})
            failed('Soryy no Access')
        }, 100)
    })
}

const login = (name, password) => {
    return new Promise((succes, failed) => {
        setTimeout(() => {
            dataUser.map((data) => {
                if (name === data.nama && password === data.password) return succes({ token: token })
            })
            failed('akun anda tidak terdaftar')
        }, 0)
    })
}


async function getDatas() {
    try {
        const { token } = await login('ian', '1234')
        const { role } = await createRole('User')
        const { acces } = await access(role)

        console.log({ token })
        console.log({ role })
        console.log({acces})

    } catch (error) {
        return console.log(error)
    }
}

getDatas()