jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))

window.matchMedia = jest.fn().mockImplementation(() => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}))
