const axiosMock = jest.genMockFromModule('axios')

const mockResponse = {
  data: {
    data: {
      from: '2019-08-12T12:30Z',
      to: '2019-08-12T13:00Z',
      generationmix: [
        {
          fuel: 'mock_biomass',
          perc: 4.8
        },
        {
          fuel: 'mock_coal',
          perc: 2.5
        }
      ]
    }
  }
}

axiosMock.get.mockImplementation(req)

function req() {
  return new Promise(function(resolve) {
    axiosMock.delayTimer = setTimeout(function() {
      resolve(mockResponse)
    }, 1000)
  })
}

module.exports = axiosMock
