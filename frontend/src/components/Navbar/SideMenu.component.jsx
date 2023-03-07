const SideMenu = () => {
  return (
    <div>
      <nav aria-label="Main Nav" className="flex flex-col space-y-1">
        <a
          href=""
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          General
        </a>

        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Teams
        </a>

        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Billing
        </a>

        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Invoices
        </a>

        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Account
        </a>
      </nav>
    </div>
  );
};
export default SideMenu;
