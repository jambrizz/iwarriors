export function CreateEvent() {
    return (
        <form>
            <div>
                <label htmlFor='event-name'>Event Name: </label>
                <input type='text' name='event-name' id='event-name' />
            </div>
            <div>
                <label htmlFor='event-date'>Event Date: </label>
                <input type='date' name='event-date' id='event-date' />
            </div>
            <div>
                <label htmlFor='street-number'>Street Number: </label>
                <input type='number' name='street-number' id='street-number' />
            </div>
            <div>
                <label htmlFor='street-name'>Street Name: </label>
                <input type='text' name='street-name' id='street-name' />
            </div>
            <div>
                <label htmlFor='city'>City: </label>
                <input type='text' name='city' id='city' />
            </div>
            <div>
                <label htmlFor='state'>State: </label>
                <select name='state' id='state'>
                    <option>Select a state</option>
                    <option value='AL'>Alabama</option>
                    <option value='AK'>Alaska</option>
                    <option value='AZ'>Arizona</option>
                    <option value='AR'>Arkansas</option>
                    <option value='CA'>California</option>
                    <option value='CO'>Colorado</option>
                    <option value='CT'>Connecticut</option>
                    <option value='DE'>Delaware</option>
                    <option value='FL'>Florida</option>
                    <option value='GA'>Georgia</option>
                    <option value='HI'>Hawaii</option>
                    <option value='ID'>Idaho</option>
                    <option value='IL'>Illinois</option>
                    <option value='IN'>Indiana</option>
                    <option value='IA'>Iowa</option>
                    <option value='KS'>Kansas</option>
                    <option value='KY'>Kentucky</option>
                    <option value='LA'>Louisiana</option>
                    <option value='ME'>Maine</option>
                    <option value='MD'>Maryland</option>
                    <option value='MA'>Massachusetts</option>
                    <option value='MI'>Michigan</option>
                    <option value='MN'>Minnesota</option>
                    <option value='MS'>Mississippi</option>
                    <option value='MO'>Missouri</option>
                    <option value='MT'>Montana</option>
                    <option value='NE'>Nebraska</option>
                    <option value='NV'>Nevada</option>
                    <option value='NH'>New Hampshire</option>
                    <option value='NJ'>New Jersey</option>
                    <option value='NM'>New Mexico</option>
                    <option value='NY'>New York</option>
                    <option value='NC'>North Carolina</option>
                    <option value='ND'>North Dakota</option>
                    <option value='OH'>Ohio</option>
                    <option value='OK'>Oklahoma</option>
                    <option value='OR'>Oregon</option>
                    <option value='PA'>Pennsylvania</option>
                    <option value='RI'>Rhode Island</option>
                    <option value='SC'>South Carolina</option>
                    <option value='SD'>South Dakota</option>
                    <option value='TN'>Tennessee</option>
                    <option value='TX'>Texas</option>
                    <option value='UT'>Utah</option>
                    <option value='VT'>Vermont</option>
                    <option value='VA'>Virginia</option>
                    <option value='WA'>Washington</option>
                    <option value='WV'>West Virginia</option>
                    <option value='WI'>Wisconsin</option>
                    <option value='WY'>Wyoming</option>
                    <option value='DC'>District of Columbia</option>
                </select>
            </div>
            <div>
                <label htmlFor='zip-code'>Zip Code: </label>
                <input type='number' name='zip-code' id='zip-code' />
            </div>
            <br />
            <input type='submit' value='Create Event' />
        </form>
    )
}