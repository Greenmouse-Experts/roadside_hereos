import useAuthStore from '../store/userStore'

const useAuth = () => {
    const user = useAuthStore((state) => state.user)
    const saveUser = useAuthStore((state) => state.saveUser)
    const userId = user.id
    const nameRow = user.name?.split(" ");
    const firstName = nameRow && nameRow[0]
    const lastName = nameRow && nameRow?.length > 1 && nameRow[1]
  return {
    user,
    userId,
    firstName,
    lastName,
    saveUser
  }
}

export default useAuth