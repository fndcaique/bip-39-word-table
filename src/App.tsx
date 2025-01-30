import "./App.css";
import words from "./assets/words.json";

function binValueFormatter(value: string) {
	return value.padStart(12, "0").replace(/^(\d{4})(\d{4})(\d{4})$/, "$1 $2 $3");
}

function App() {
	const wordsWithIndexAndBinIndex = words.map((word, index) => {
		return {
			word: word,
			index: index + 1,
			binIndex: (index + 1).toString(2),
		};
	});

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>IDX</th>
						<th style={{ textAlign: "left" }}>WORD</th>
						<th>BIN</th>
					</tr>
				</thead>
				<tbody>
					{wordsWithIndexAndBinIndex.map((word) => (
						<tr key={word.word}>
							<td style={{ textAlign: "center" }}>{word.index}</td>
							<td style={{ textAlign: "left" }}>{word.word}</td>
							<td
								style={{
									textAlign: "right",
									display: "flex",
									justifyContent: "flex-end",
								}}
							>
								{binValueFormatter(word.binIndex)
									.split("")
									.map((char, index) => (
										<div key={`${word}-bin-${index}`} style={{ width: "0.75rem" }}>
											{char}
										</div>
									))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default App;
