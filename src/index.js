(function() {
  let settings = {
    url: "http://127.0.0.1:9292",
    duration: 5000 // 5 seconds
  };
  let images = {
    play: "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAGSUlEQVR42uzdy4uOcRjG8dspzTjlkFAk5Rw5lGKjlCliMVGIzatEmRJF0pRSSBamLESRSE1OZUGN08LCYUhERFOaqYl6J41ML814PK6N7oWV9fX91PdPuHrr7e73BAAAAAAA+A9lWc5T0wJwVBTFAQ2gU+1QdQGY/QI0laldbQzAaAC7y3/dUAsDsBtA6lVH1fgA7AaQOtQ2NSQAuwGke6ohALsBpF/qgpoZgN0AUlUdUmMCsBtAeqs2qKEB2A0g3VXLA7AbQPqhzqmpAdgNIH1We1R9AHYDSC/U2gAsB5CuqaUB2A0gfVctamIAdgNIn1RFDQvAbgDpkVoZgN0A0oC6pOYHYDeA9FUdVmMDsBtA+qg2c3YNzwGkNrUiALsBpH51Rs0IwG4A6Ys6qEYGYDeA9FqtC8ByAOmqWhKA3QBSn2rh7BqeA0idaq8aHoDdANITtSoAuwGkQl1WswKwG0DqUcfUhADsBpA+qAqvVcBzAOkhZxUwHoDkWcX0AOwGkLrVPjUiALsBpDdqkxoUQA7Azh21KMAAlKs+dVJNDjAAY11qJ69VMAB3T9WaAAMw9lu1qjkBBmCsRzWrcQEGYOy9qvC3KQNwd5+zCgbg7qc6y1kFA3D39yMgowIMwFg7r1UwAJTlTT4CwgDc1dQJNSXAAIx1qu28VsEA3D1XqwMMwFi/alWzAwzAWK86wlkFA3D3Tm3hrIIBuGvjNTsG4G5AXeSsggG4q6r9nFUwAHcvVWOAAZi7rRYHGICxmjrFaxUMwF2X2qXqAwzA2GPOKhiAu0JdVwsCDMDYN3Wcj4AwAHcdaisfAWEA7h6ohgADMFao85xVMAB3VdWsRgcYgLFXqlENDjAAY7fUsgADMFZTp9WkAAMw1q2aVF2AARh7ptYHGIC5K2puuGMA1v6wd3+vNcdxHMffE8Uu2MrIzShlpZTVUhbJFGUXJBeKC+FO8utCckNRLqS4kJQbZeXGheGC/LhBLojM3RRl1Ni0LbVfOZ7/Bq/no56dv+BVZzuf7+c7QpeozQEo2SAdoiYHoGQPaYMDULIpukUdDkDJRuk0tTgAJfsw22js5rPJAShZP3U5ACX7TVep3QEo2Vc6TM0OQMneUK8DULo+WuUAlGyEzlGrAxDij1XMcwBK9px6HICSTdMNWukAlGyYTtICB6BYExMTT7u7u5c4AEUaGxt73NnZ2eYAlOY7Haf5fgVSkmm6Tu3+Eaw0z/w3qPwhzAEoxAidpRaPQsjDcA5AAV7Sdo9DK/WBmAU+ECMfiXQACnDPh+KV6D3t8loUpRmiU7TIi7GUZJJuULtXI8rLcR2AvB7dAcgXZDgA+YokB6B/3WvaVnIAviZVDsAXZTuAhv5Xd2ldyQGEeUc7Sg4gzDAdo4UlBxBkkq7R8pIDCPOEekoOIMwg7aW5JQcQZJQu0OKSAwgyQ3dodckBhHlBW0oOIMwXOujxBQeQZpwue3zBASS6T2tKDiDMa9pZcgBhhukoNZccQJApukIrSg4gTD9tLDmAMB9pT8kBhPlFZ6i15ACCTFMfdZQcQJhHtKnkAMJ8pv00p+QAgozTRVpWcgBhbvs93wEkekW9JQcQ5hsd8ZiyA0gzSde9fcEBJOqnrpIDCDNA+6ip5ACC/PT4ggNINOPxBQeQ6hVtLTmAMJ/oAM0rOYAgE3SBlpYcQJgHtLbkACjJW9pdUtgAhuiEty8obQDT3r6g1AE8ofUlhQ1gwJdHKHEAP+g8tZQUNIBZukmrSkoawJ9G4yUfm0sKG8Df9u5QpaEwDsP4HwQRBINg0wuYWEy7AcuCSbBYVmcxCcMoliW7GGbTYBdhfWCRlQXFYBFhYjAMxAM+xXsQ3ucHzx2clwOHj+88UY8WSwoawBedekxZiQO44aP+dklhA3j09gUlDuCVjmm5pKABzOmc1ksKG8AdtUsKG8CU9r1UVmkD+KATWikpaADfNKRWSWEDGPmTOCUO4IW63r6gtAHMaEBrJYUN4MpjykocwAN1SgobwBsd+fMIpQ1gThe0UVLYAG69fUGJA5jQXklhA3invscXlDaAH7r0ljUlDuCedkoKG8AzHdBCSUED+KQzWi0pbADXtFlSwAAO6c+YdktK0TRNn4d+Rj1aKinsDbDlZ01JkiRJkqR/7BdMGIs4S/tOfgAAAABJRU5ErkJggg==",
    success: "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAS6klEQVR42uydXWwUVRiGaWt/uLBY0h9tUYGkoIkhpQiIP4RLA6IYRCpciN4oCYKJV3gBBI29kSu4k0CwaEwNLVZDbbhCbzCW2pjUG4iN8tcmIsVut+3unlnfIeeYz7HbqWW2M3P2fZMnM9tuds7svN93vjlzZnYeNbWy2WyRpthdTvO+EjAf3A/qwOPpdHoDllsymcybSqn9juN8j/Ukllk/ue9RKnMHy26l1Hv40+vgJfAsWAZq9bbmg5Jc7ZJtd5lHUUa+pgE5/l+uzfcweApsB/vBcRj2POjH+m/gNtYTWLokQRo4YKZyQAqfkdSfMQpugV9BH+gBx8F+3Ya1oEG3rSxH24tdGAxUzkw5xf8qQA1oAjtAK+gCv4DbYBJkQFjKALTB+RPBMqDb1nq3ram7ba4GFVPtM4OBppeZXmbJyomJiWUoWV7B+sfgOzAMUjPI4o5GCRyNjwL7LAekdJsv6H3YChpBJShmz1DAxs9hgGqwGrwD2nWpMTmdybymhLJzJb0t5z/tyK1JvU/teh+bwULvd8FAsFQ5sv0C0AT2gm/AHz6eg8E0EZUIRr92DoOvdDA0gQVTfl+UFcYvEq9LUd4sRXnj1vOnwY2cRjLEXf77cgN8Bl4DS0Cp7DEZCDFUjmy/FhwCfSATgOltC4YM6NPf0Vpvr8BAiKfx65DtN2F5EgwBj/zr9wINhiH9nW0EtQyE+JU6DaBF17mJnAef8vs+RkEn2A4aWBpFfFQH6/W6lj0H0jR9YMGQBuf0d1vPUaNoGL9EvK4CW0AXjZ/3QOjS33WVnA7CQAihzh8YGCjD6/VKqZO6u/YMXdL3AV5zkBp1v3PMeVrvHgOeH4RT7ixXSn2I5bWsELN93nsFqWv6GCxnWZRHeYxfDXaBiyxzolEeoZe4iNG2N0ZHR2vYG+TX/OtAG0gx40euR0gppU67x4hBEIA8w5o1YB8yzWXW+NE+R7h7jJTah9V/egOWRPeW9ZvdzOJALHfiURY5kO4NmtkbzNL8WJaBnaAfGKksFXXJY9Svj2EZg2CGtyCKK7kfgRFm/difJI+AVnMlmbdo+tT7qVSqGa87mPWt6w063GPL84Lp6/3NoJfmtzYIejFc+iLPC6au998G11jyWH+CfN091gV/XiDMX6mUOoRlglm/YHqDBDgEKo0XCtL8iUSiDuY/Zr4YZAea327JY6ygY64HjCcKLfMvUkp9+q87kqhCkTzWp7LJZIPwhv3mn5ycfAyZgCM9LIdMr9COxVLjEdsz/xOgh+anPEFwzvWG8YrN5j/PiWxUjgld52UQ2Gb+5aCH5qc88k6m+xaPrmk03rHC/MlkchHWz9D81AynVn8JxIlxvDN/LThF81P+5ZDwBjwDao2XYnuRCxzlCS81y6kTR+XFsthMbBM3rB8Eiuan/qekZw66XjLeis2sTqXUW3id4BVe6h6vGCdcL0mPRT4AsNwErvIKLxXQFeOrYJPxWNTr/mbQy7KHCrgc+hE0Ga9F1fz16LrOcLSHytMQafvY2NhDxnNRK3vKQSuHO6l8XiNwH8QlT4qjFAA7wV8sfag8l0J3wI6olT6rUPr8TPNTcxEE2murjAfDNn+NUuo0yx5qLssh7bka48Uwx/v3uo1iAFBzIek113vSk2Fk/6fRHV1h6UOFVApdcT1oPDnX5q8Gbcz8VMg9QRuonvNSKJPJ7MIG0wwAKuQASINdc5X9S8TNLRdp/oL/yaRQJZ419IN7n7nxaL7H+0uVUoezWnxEud2ShzdqCU96T3uy1Hg1n7X/enCD2d96eZNbOoJBINtyHTwnvBq8+UdGRqqwfoKZv+BuUewHB3DMeyLeE5wAVcazgZc/7oNNsZ5g9i8o8/eJocbF4Kx8X8TaOwY2G88GXfo8iEg7m6UKzfzrPH54JIJBINUB6vLRC7Rw2LMwzS9//tQEgScZOhEbFm0JfJ4/6M5ShWr+IrkueoLOiPYE3YE+VgUfso3Zv/Bqfq/5vX8bHx+PWhDIXmBbkM/16eC4P80f8SDwerNTPlfoXkZ+NmJ9jNmf5jeKeDkkR4SeN+2cbfZfAE7wNkeaP0ZBILf7iXyw1mwCYDUYovlp/unkGR2KUhDcTKVSTxpPz2bOzwFmf6vNf8nP/DHtCeQ23wf3iTbOOPsvAT9lKcum9/ibP6Ag6IhI8uwDS2ZTBm0DitnfGjkaYf7Af7ldjg6FGQRyewq0yPbN9OS3jeWPteZ/xsf8NvQEclufgweEx30DoAl9JU9+LTO/42N+i4Pgpnysol+Di8EeZn/rMn+vj/ltDAK5nT0iwRdNl/0Xgi4GgL3mD+nJgY+GMKNAbqQLLBRezxkAK8EwzR/voR4/84cUBItBZ0gnw8NgpfF6rgYWgd3M/jR/0BJj8RvAxBz6S25jt/R6rt/0+oIBQPPn6X7yCtAKVBhlkIK3vVMjvA1sxLsHaX6aPw/mLweHwXhYo0Ha242yXd6bHbaCFAOAJ7xBmn9wcLAiRPPL7aXAVln6y/q/Ahxh+UPzB5/51WH0UBMRmRt0BFTIAJDP+ryQpWj+OJc9/rognyUqe4AVnPpM81tqfrn9IbBiqpGg7ab+d3jfI81vl/mlp1OgxdvwMtBqyQ9dOAIbJfPTJZp/xpLebgXlsvGV4GsLToAd72sLRzsjbX6l1AdopDB/9LyB9rler5Q70AAGzP9jbvzfQTcYsSwIHBD1zB9V83sfpz7gel7uxBpwC7hSMa6HL4OXQT14Fzt6x7zHVvO70Pz+kt7WXl8jd+RVMGneFNN6+Ap4QV7kAHst6Alk1/03e2cPG0cRhuFzoih2gwkCWQpQUAAGhAhOTBMo0joILFKQICQQPw2yZASRoKJADohI1DQIEEoiJArkILAwP0UkBA02BddwAqfCJEWQ7Jx/7jx7eSe+PT6PvJ71+nZ3Zvx+0uvz+d8zz7vz3ezMN6JQrRvw12o1X+CXbK9o5junvkBvQ2uegSLB0PAflwuvpAk8Hgnk3+sS/D1i8sSA34v2XGszv7eCN33Qx/KLfIZfbuwxRgJhAr9Ll7gEP7TkGTeyZlBfPAM0LYDy6Z/YFH4dNhMQ/p3Br5Sa8Ax+k+1pzX5c+3PGFzCiyA5/WhMQ/sxX/glo2fO0chYaqKysrNyHd/4Wn/QF/pG0YEgTKKU2mIDwZ4DfyPk9NcBlaLCCN497MAUaQanh92MksNfn55U/15mga81m8wld/flpPFkUn/QY/uwmIPzWnP9MAPBLxhc1+9oAL4iD71RY8NtNIO8TEP7g4ZeMX9fs63/wjfjVfIQIA/7sJiD8QcMvl0MsKaXe1P/kt3IbpIPz/Inw52UCwh9Czm/fHgm2pirN5toCnoR/5bfPDo3LO8aEP0j4ZUTo88WKzHrCh99uAstIEDz81Wo1ePhlVCCHwg5/6SYIP+efMNf20AChwW9/TWCYIIclzQ5e+TX85pWfBige/ictYLhtAjv8v0DDjsC/Z6srPw1QfNGi5yxguG0CO/y/QkOEnwZw1gBmsWDAoXeWCRNkhv9n6LA78Cev56cByosadNwhE8iR4L8Ykgzw/wQ9TPhpAAdfBNtNoCNxJLDfyPtxdXX1wUo7uIeXBvDWBClHAgn/Dxp+bmCnAdJG5IEJXk8ygXyOhVbT2Gtxv4Tfnbo9LcLfDj20L+qGoAmym8An+Fstwi+XQviwGM4HE6yJv/d7pD2DhN/9xXCafT0CnI6XQ3MkyGSCawL+acD/AOH3Zjn0ab0h5mU8r0M6FF8TbNsEuu7QPNrxO5n26EfC7/aGGOglbYBRc0skTbC9+wQAf2RhYcG1tKe3Xah2hfAnbokcreiNwXoYl5+kCSxh+d2E36NN8XhnELosGsqbglg0QTL8eCT8KcuiDECzQRTGKiEIP8LjwliJpRE5EhB+/8NeGjHI4riEn/CnLY6bWB6dJvALfrTBKuHPUB49pAMyTBMQfoblgIxwjkhK2lLJtIdhOSIpjEPy5DlhpgkIP8N2SN4t7aMjWzQB4Q8v7Mek7oc+MJf20gTuwQ+9S/i7d1C2bOTnoea6Q9a/mCYg/AEer9+ATm22qOsQdFU2Lk3gBvxzc3M34efanq6MAFegR2IW5BXmduhSSHf9fDaBXNJM+LsalzTrcRvLEaAX+lAyRBOUDz9XdXb9DrBmvDdmwNzcccLcHhmYCf5MYwJuZgl6G+QJ2f9mo98LzclvogkIfwARAzCnGZdtbTZ8P/Ql1KIJCH8gEYnbwF/E8/+mAXriD0Jj5jfTBMXBj14i/Pnl/6/JraxJnTBkTofSBEXN9hD+HA1wtYHixKKfEzviNuii8QNCC4sJioW/VquxXGH+V/+Lmm0z/UmdBtEErNLsuQHG5NkPW3ZKo9F4FO/Pyx9CE+R4JhfTnrz7dh46JBi3XpVuhS5ALZqAB9J5P/uj1AXNtGA8VcWzk5DaDZ0TRVubgOfwer/98aTsg7S56T3QbCshODtE+D2JWc2yYDt1R+1TSr0jGaEJCL+H6Y9meJ/Zh2lHgWHo3zSdxVWkqXL+M4S/UANodocl09s1QD867dMWgib4H2jC783U5ydQv8UA1s4bgeryh9MErR7C77wB6tCIvb/so8AANCnBoAnWG5XwO136cBIaECzvaAbjWaNyHE3QBp3wuzv12c3b9XdCU7u7YZNNwNke52JKMysY3nngNI1TchSgCTaYYE/c0NVqlfCXfPXXrOaxaOsg0oFv2MjQJgV5ubzBmfi6Xq8fFOx29Rb+M/JEyd1ugrgWqSgqQPhLnvnR5351ewmLuVfgc3bwhv+9Br2llPoIH62zbcqb/UEffIaHA5LZPExwDLrCjt4QDShim5Re8OpYHvCbadB+6P3Ob2d33wzCX+68f1zvU7Kahwn2th8fgmbY6Z2I2A6lXnBmNJOC0UJOSH8FUjQBo2T4FfSqZLSovax3QOdpAEbJBjivWTRz/6JMcBT6az0f46sBRuGlzjV7Ry3w554KjXMGhFHSQRfjltSnsFToHA3AKNgA5yypT6EmOIJB6Y/OixIGI59Q7RRIs3bEAn/hqdCL+MPqNAEjZ/jrmjVXChubB2yc5U0hRs43GM/KAy5cq2t/NzRJAzByOt/3q6WlpbvM1Mc1EzwG/c5UiNHl091/Q8nOIRv8rqRDo9A/ne1pDEaGEOxolp5Km/a48qJ4DFrmSMDIeLMrZmYZGtuMMddHgb541ShNwMiY9kTQe1CfYMur080P3GjvfF6iCMM4LiqoXVzCH6moHTqpeUmFoCiwPyDILqVYh4IuXQQ7dlOCoFOgV2HVOrWESK509lAHcS+eJDFKUEFQJnVf7TPwLKzDbu+2ru7OzPPAh51ld2feed/v932f2Z19X5hUE2j8v/jZMGbCMrGVL0zQDNP69aiGJbzaiEKTV/y+NIHjOG1sx9QEGjmKPwZtFvH7biTogLiaQMMi/jh0eMUfCBMcHBxcZ3tRTaCRRQOLrkYs4vf9SNAFcb0w1vC0fRy6vOIPqgk64bOaQMUvEcsn7fH7hfFVtmfUBKEX/3QwLnjz/4p0Ek70tolQhLeNJ6E5+OK3/1g2rrdNhKrnd2DcMotbqExQAy/hl86zE/h5k35LW9d4xR9qE6RNvrus1wWBzfeX4UEZoeLPfhdpH8TUBIH8pqfvVJtrnDaBi2y3GmPe8rinKZHvU549acvWVDur+HO8LmCu96c8JuBEJ9/yRXjbKOG2oeb7Z7su6DXGzOpEtL6bIHgaejXfL8x1QSO8onNZ51EHhBJdRVOe/zDGjLLZoPl+AUyQlhKVw134CEm9oa7kbmRLwgzcSbuWK1fxFz4lugLP6Wm+a1pUMunON3gGDZryXMBoIM87jDFvMMKmrtJSnBVw3Lp32yB1I5v2+hc8GqytrVXzvB+i4KgRLkb4UtdR6HfbQHv94owGFWnP6+AhzMGRLl90bss+HcGc1HVd+tJZ2uuXRlrUAo9hXo1QUOEfwrzUbYumOyWcFqWMwA8wj6S3cnRRu7wX+XNgzq3LlPA13fGXEZrgPkRhW42Q8/lvQ1TqrkmF7+O0KG2F+9swBitwnFUMEHjBZz//FRiTurpcRmi6EywjVME1GIZZ2LQJJciil9iEDzAsdVOlwg9gapTBDBHogVFYgJ1cRET44LYEq3l3eO+CnHsPRLz1palOeEaFCqiHmzACn2ADkhZDGKFYI8WxtxyW/+FuyLmNyLnWQ4X29iE2QhYzRKAThuA9LMEWPabHEDZj2IV5jvs7gi1YknMYknOKZBK9Cl/NkFEA8l/lRrgBT4wx7zDCF7ZXYRcOIVnkGRYOpSyrbtncMrpllTI3Qk2mc1bRa1hGhoyvV0MttMMtGERwr3mcgq+QgJ8iyD3Yhz95/q3TyGf3ZV+7su+EHGtKjj0oZWmXslWXSWhPr3FGM9hFw2uVcEnE1wLdcA8G4AVMINR1yDkVct8L6+5nZR8Dss9uOUatHLPyX+VX0dvjL/PlSHmfbvuyAAAAAElFTkSuQmCC",
    retry: "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"
    // loading: "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"
  };
  let path = {
    getCSS: () => `${settings.url}/public/c.css`,
    getCaptcha: () => `${settings.url}/captcha`,
    checkCaptcha: (id, seq) => `${settings.url}/captcha/${id}?seq=${seq}`
  };
  let state = {
    text: ["Remember the pattern.", "Repeat the pattern."]
  };
  let elements = {};

  const pipe = (value) => ({
    value,
    valueOf() {
      return this.value;
    },
    toString() {
      return this.value.toString();
    },
    to(fn, ...args) {
      this.value = fn(this.value, ...args);
      return this;
    },
    call(method, ...args) {
      this.value[method](...args);
      return this;
    },
    apply(fn, ...args) {
      fn(this.value, ...args);
      return this;
    }
  });

  // Return an array of the result of querySelectorAll
  const q = (selector, parent) =>
    Array.prototype.slice.call((parent || document).querySelectorAll(selector));

  // Send a bare-bones AJAX request and call a callback on success.
  // Doesn't have any error handling.
  const request = (type, uri, fn) => {
    let req = new XMLHttpRequest();
    req.open(type.toUpperCase(), uri);
    watch(req, "load", function() {
      if (this.readyState === 4 && this.status === 200) {
        fn(this.responseText);
      }
    });
    req.send();
    return req;
  }


  // Function decorator to adapt functions for application on an array
  const adapt = function(fn) {
    return function(coll, ...args) {
      if (coll instanceof Array) {
        let res = [];
        for (let elem of coll) {
          res.push(fn(elem, ...args));
        }
        return res;
      } else {
        return fn(coll, ...args);
      }
    }
  }

  // Shorthand for adding/removing eventListeners
  const watch   = adapt((emitter, evt, fn) => emitter.addEventListener(evt, fn));
  const unwatch = adapt((emitter) => {
    let clone = emitter.cloneNode(true);
    emitter.parentNode.replaceChild(clone, emitter);
  });

  // Convenience functions for elements
  const style = adapt((element, props) => {
    for (let prop in props) {
      element.style[prop] = props[prop];
    }
  });
  const show = (element) => style(element, { display: "block" });
  const hide = (element) => style(element, { display: "none" });

  const getAttr = adapt((element, attr) => element.getAttribute(attr));
  const setAttr = adapt((element, attr, value) => element.setAttribute(attr, value));

  const addClass = adapt((element, cls) => element.classList.add(cls));
  const remClass = adapt((element, cls) => element.classList.remove(cls));

  // Add the stylesheet to the current document
  document.head.appendChild(
    pipe(document.createElement("link"))
      .apply(setAttr, "rel", "stylesheet")
      .apply(setAttr, "type", "text/css")
      .apply(setAttr, "href", path.getCSS())
      .valueOf()
  );

  function imageSrc(type, encodedImage) {
    return `data:image/${type};base64,${encodedImage}`;
  }

  function render() {
    return `
      <input type="hidden" id="uncaptcha_id" name="uncaptcha[id]">
      <div class="uncaptcha-status">
        <img>
      </div>
      <div class="uncaptcha-input">
        <ul class="uncaptcha-buttons">
          <li class="uncaptcha-blue" data-color="b"></li>
          <li class="uncaptcha-red" data-color="r"></li>
          <li class="uncaptcha-purple" data-color="p"></li>
          <li class="uncaptcha-green" data-color="g"></li>
          <li class="uncaptcha-yellow" data-color="y"></li>
        </ul>
        <div class="uncaptcha-actions">
          <span class="uncaptcha-action-text"></span>
          <span class="uncaptcha-action-buttons">
            <a href="#retry-captcha">Retry</a>
          </span>
        </div>
      </div>
    `;
  }

  function setActionText(text) {
    elements.action()[0].innerText = text;
  }

  function bootstrap() {
    elements.container = () => q(".uncaptcha");

    elements.action = () => q(".uncaptcha-actions");

    elements.buttonsContainer = () => q(".uncaptcha-buttons");
    elements.buttons = () => q(".uncaptcha-buttons li");

    elements.stateContainer = () => q(".uncaptcha-status");
    elements.state = () => q(".uncaptcha-status img");

    elements.input = () => q("#uncaptcha_id");

    elements.container()[0].innerHTML = render();

    ready();
  }

  function ready() {
    setActionText(state.text[0]);
    addClass(elements.container(), "ready");
    setAttr(elements.state(), "src", imageSrc("png", images.play));

    watch(elements.stateContainer(), "click", play);
  }

  // Get the captcha and start things off
  function play() {
    unwatch(elements.stateContainer());

    pipe(elements.container())
      .apply(remClass, "ready")
      .apply(remClass, "retry")
      .apply(addClass, "play");

    request("get", path.getCaptcha(), (res) => {
      let {id, image} = JSON.parse(res);
      state.id = id;
      state.image = image;

      setAttr(elements.input(), "value", id);
      setAttr(elements.state(), "src", imageSrc("gif", image));

      setTimeout(input, settings.duration);
    });
  }

  function input() {
    pipe(elements.container())
      .apply(remClass, "play")
      .apply(addClass, "input");

    setActionText(state.text[1]);

    state.sequence = "";
    watch(elements.buttons(), "click", (evt) => {
      state.sequence += getAttr(evt.target, "data-color");
      if (state.sequence.length === 4) {
        verify();
      }
    });
  }

  // Verify captcha and cleanup
  function verify() {
    unwatch(elements.buttons());

    request("post", path.checkCaptcha(state.id, state.sequence), (res) => {
      let {id, status} = JSON.parse(res);
      if (id !== state.id) return;
      state.status = status;

      status ? success() : retry();
    });
  }

  // On success
  function success() {
    pipe(elements.container())
      .apply(remClass, "input")
      .apply(addClass, "success");

    setAttr(elements.state(), "src", imageSrc("png", images.success));
  }

  // On error, present option to retry
  function retry() {
    pipe(elements.container())
      .apply(remClass, "input")
      .apply(addClass, "retry");

    setAttr(elements.state(), "src", imageSrc("png", images.retry));

    watch(elements.stateContainer(), "click", play);
  }

  watch(document, "DOMContentLoaded", bootstrap);

  window.state = state; // for debugging purposes.
  window.mountUncaptcha = bootstrap;
})();
