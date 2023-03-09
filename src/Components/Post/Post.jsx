export default function Post() {
  return (
    <div class="min-h-screen  flex justify-center items-center">
      <div class="max-w-xl container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <div class="text-white text-xs font-bold rounded-lg bg-green-rgb(13, 202, 161) inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
            <div class="flex items-center space-x-2">
              <img
                class="w-10 rounded-full"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                alt="sara"
              />
              <h2 class="text-gray-800 font-bold cursor-pointer">
                Felipe Sacudon
              </h2>
            </div>
          </div>
          <h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
            Lampara Look
          </h1>
          <p class="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
            #by Saca Tuerca
          </p>
        </div>
        <img
          class="w-70 cursor-pointer"
          src="https://wallpaperaccess.com/full/1940042.jpg"
          alt="post picture"
        />
        <div class="flex p-4 justify-between">
          <div>Last comment</div>
          <div class="flex space-x-2">
            <div class="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-gray-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
              <span>22</span>
            </div>
            <div class="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
