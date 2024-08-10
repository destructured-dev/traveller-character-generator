import { careers } from "./careers"

export const TermChooser = () => {
  return (
    <div className="border-2 border-black">
      <label htmlFor="career"></label>
      <select id="career" name="career">
        <option key="choose" value="choose">
          Choose an option
        </option>
        {careers.map(career => (
          <option key={career.name} value={career.name}>
            {career.name}
          </option>
        ))}
      </select>
      <div>{careers}</div>
    </div>
  )
}
