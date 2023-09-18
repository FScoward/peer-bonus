function getData() {
	const jsonString = `{"remainingPoints": 100}`
	const json = JSON.parse(jsonString)
	return json
}


export default function Dashboard() {
	const json = getData()
	return (
		<div className="flex min-h-screen flex-col items-center p-24">
			<div className="container mx-auto">
				残りポイント数: {json.remainingPoints}pt
			</div>
			<div className="container mx-auto">
				ピアボーナス送信履歴
			</div>

			<form className="w-full max-w-sm">
				<div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">ターゲット</label>
          <div className="mt-2">
            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>田中たろう</option>
              <option>佐藤一郎</option>
              <option>鈴木はじめ</option>
            </select>
          </div>
        </div>

				<input className="text-gray-700" type="number"></input>

				<div className="flex items-center border-b border-teal-500 py-2">
					<input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Thank you 🎉" aria-label="Full name" />
					<button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
						送信
					</button>
				</div>
			</form>

		</div>
	)
}