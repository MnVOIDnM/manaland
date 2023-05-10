import { Link } from "react-router-dom"

function Header() {
  return (
    <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl pl-3 py-1 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link to="home" class="text-gray-900 dark:text-white hover:underline">ホーム</Link>
                </li>
                <li>
                    <Link to="pref-quiz" class="text-gray-900 dark:text-white hover:underline">都道府県クイズ</Link>
                </li>
                <li>
                    <Link to="capital-quiz" class="text-gray-900 dark:text-white hover:underline" aria-current="page">県庁所在地クイズ</Link>
                </li>
                <li>
                    <Link to="map-icon-quiz" class="text-gray-900 dark:text-white hover:underline">地図記号クイズ</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Header