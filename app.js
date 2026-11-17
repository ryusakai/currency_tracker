const HISTORICAL_DATA = [
  { date: '1985-06-01', value: 248.84 },
  { date: '1985-07-01', value: 241.14 },
  { date: '1985-08-01', value: 237.46 },
  { date: '1985-09-01', value: 236.53 },
  { date: '1985-10-01', value: 214.68 },
  { date: '1985-11-01', value: 204.07 },
  { date: '1985-12-01', value: 202.79 },
  { date: '1986-01-01', value: 199.89 },
  { date: '1986-02-01', value: 184.85 },
  { date: '1986-03-01', value: 178.69 },
  { date: '1986-04-01', value: 175.09 },
  { date: '1986-05-01', value: 167.03 },
  { date: '1986-06-01', value: 167.54 },
  { date: '1986-07-01', value: 158.61 },
  { date: '1986-08-01', value: 154.18 },
  { date: '1986-09-01', value: 154.73 },
  { date: '1986-10-01', value: 156.47 },
  { date: '1986-11-01', value: 162.85 },
  { date: '1986-12-01', value: 162.05 },
  { date: '1987-01-01', value: 154.83 },
  { date: '1987-02-01', value: 153.41 },
  { date: '1987-03-01', value: 151.43 },
  { date: '1987-04-01', value: 142.90 },
  { date: '1987-05-01', value: 140.48 },
  { date: '1987-06-01', value: 144.55 },
  { date: '1987-07-01', value: 150.29 },
  { date: '1987-08-01', value: 147.33 },
  { date: '1987-09-01', value: 143.29 },
  { date: '1987-10-01', value: 143.32 },
  { date: '1987-11-01', value: 135.40 },
  { date: '1987-12-01', value: 128.24 },
  { date: '1988-01-01', value: 127.69 },
  { date: '1988-02-01', value: 129.17 },
  { date: '1988-03-01', value: 127.11 },
  { date: '1988-04-01', value: 124.90 },
  { date: '1988-05-01', value: 124.79 },
  { date: '1988-06-01', value: 127.47 },
  { date: '1988-07-01', value: 133.02 },
  { date: '1988-08-01', value: 133.77 },
  { date: '1988-09-01', value: 134.32 },
  { date: '1988-10-01', value: 128.68 },
  { date: '1988-11-01', value: 123.20 },
  { date: '1988-12-01', value: 123.61 },
  { date: '1989-01-01', value: 127.36 },
  { date: '1989-02-01', value: 127.74 },
  { date: '1989-03-01', value: 130.55 },
  { date: '1989-04-01', value: 132.04 },
  { date: '1989-05-01', value: 137.86 },
  { date: '1989-06-01', value: 143.98 },
  { date: '1989-07-01', value: 140.42 },
  { date: '1989-08-01', value: 141.49 },
  { date: '1989-09-01', value: 145.07 },
  { date: '1989-10-01', value: 142.21 },
  { date: '1989-11-01', value: 143.53 },
  { date: '1989-12-01', value: 143.69 },
  { date: '1990-01-01', value: 144.98 },
  { date: '1990-02-01', value: 145.69 },
  { date: '1990-03-01', value: 153.31 },
  { date: '1990-04-01', value: 158.46 },
  { date: '1990-05-01', value: 154.04 },
  { date: '1990-06-01', value: 153.70 },
  { date: '1990-07-01', value: 149.04 },
  { date: '1990-08-01', value: 147.46 },
  { date: '1990-09-01', value: 138.44 },
  { date: '1990-10-01', value: 129.59 },
  { date: '1990-11-01', value: 129.22 },
  { date: '1990-12-01', value: 133.89 },
  { date: '1991-01-01', value: 133.70 },
  { date: '1991-02-01', value: 130.54 },
  { date: '1991-03-01', value: 137.39 },
  { date: '1991-04-01', value: 137.11 },
  { date: '1991-05-01', value: 138.22 },
  { date: '1991-06-01', value: 139.75 },
  { date: '1991-07-01', value: 137.83 },
  { date: '1991-08-01', value: 136.82 },
  { date: '1991-09-01', value: 134.30 },
  { date: '1991-10-01', value: 130.77 },
  { date: '1991-11-01', value: 129.63 },
  { date: '1991-12-01', value: 128.04 },
  { date: '1992-01-01', value: 125.46 },
  { date: '1992-02-01', value: 127.70 },
  { date: '1992-03-01', value: 132.86 },
  { date: '1992-04-01', value: 133.54 },
  { date: '1992-05-01', value: 130.77 },
  { date: '1992-06-01', value: 126.84 },
  { date: '1992-07-01', value: 125.88 },
  { date: '1992-08-01', value: 126.23 },
  { date: '1992-09-01', value: 122.60 },
  { date: '1992-10-01', value: 121.17 },
  { date: '1992-11-01', value: 123.88 },
  { date: '1992-12-01', value: 124.04 },
  { date: '1993-01-01', value: 124.99 },
  { date: '1993-02-01', value: 120.76 },
  { date: '1993-03-01', value: 117.02 },
  { date: '1993-04-01', value: 112.41 },
  { date: '1993-05-01', value: 110.34 },
  { date: '1993-06-01', value: 107.41 },
  { date: '1993-07-01', value: 107.69 },
  { date: '1993-08-01', value: 103.77 },
  { date: '1993-09-01', value: 105.57 },
  { date: '1993-10-01', value: 107.02 },
  { date: '1993-11-01', value: 107.88 },
  { date: '1993-12-01', value: 109.91 },
  { date: '1994-01-01', value: 111.44 },
  { date: '1994-02-01', value: 106.30 },
  { date: '1994-03-01', value: 105.10 },
  { date: '1994-04-01', value: 103.48 },
  { date: '1994-05-01', value: 103.75 },
  { date: '1994-06-01', value: 102.53 },
  { date: '1994-07-01', value: 98.44 },
  { date: '1994-08-01', value: 99.94 },
  { date: '1994-09-01', value: 98.77 },
  { date: '1994-10-01', value: 98.35 },
  { date: '1994-11-01', value: 98.04 },
  { date: '1994-12-01', value: 100.18 },
  { date: '1995-01-01', value: 99.77 },
  { date: '1995-02-01', value: 98.24 },
  { date: '1995-03-01', value: 90.52 },
  { date: '1995-04-01', value: 83.69 },
  { date: '1995-05-01', value: 85.11 },
  { date: '1995-06-01', value: 84.64 },
  { date: '1995-07-01', value: 87.40 },
  { date: '1995-08-01', value: 94.74 },
  { date: '1995-09-01', value: 100.55 },
  { date: '1995-10-01', value: 100.84 },
  { date: '1995-11-01', value: 101.94 },
  { date: '1995-12-01', value: 101.85 },
  { date: '1996-01-01', value: 105.75 },
  { date: '1996-02-01', value: 105.79 },
  { date: '1996-03-01', value: 105.94 },
  { date: '1996-04-01', value: 107.20 },
  { date: '1996-05-01', value: 106.34 },
  { date: '1996-06-01', value: 108.96 },
  { date: '1996-07-01', value: 109.19 },
  { date: '1996-08-01', value: 107.87 },
  { date: '1996-09-01', value: 109.93 },
  { date: '1996-10-01', value: 112.41 },
  { date: '1996-11-01', value: 112.30 },
  { date: '1996-12-01', value: 113.98 },
  { date: '1997-01-01', value: 117.91 },
  { date: '1997-02-01', value: 122.96 },
  { date: '1997-03-01', value: 122.77 },
  { date: '1997-04-01', value: 125.64 },
  { date: '1997-05-01', value: 119.19 },
  { date: '1997-06-01', value: 114.29 },
  { date: '1997-07-01', value: 115.38 },
  { date: '1997-08-01', value: 117.93 },
  { date: '1997-09-01', value: 120.89 },
  { date: '1997-10-01', value: 121.06 },
  { date: '1997-11-01', value: 125.38 },
  { date: '1997-12-01', value: 129.73 },
  { date: '1998-01-01', value: 129.55 },
  { date: '1998-02-01', value: 125.85 },
  { date: '1998-03-01', value: 129.08 },
  { date: '1998-04-01', value: 131.75 },
  { date: '1998-05-01', value: 134.90 },
  { date: '1998-06-01', value: 140.33 },
  { date: '1998-07-01', value: 140.79 },
  { date: '1998-08-01', value: 144.68 },
  { date: '1998-09-01', value: 134.48 },
  { date: '1998-10-01', value: 121.05 },
  { date: '1998-11-01', value: 120.29 },
  { date: '1998-12-01', value: 117.07 },
  { date: '1999-01-01', value: 113.29 },
  { date: '1999-02-01', value: 116.67 },
  { date: '1999-03-01', value: 119.47 },
  { date: '1999-04-01', value: 119.77 },
  { date: '1999-05-01', value: 122.00 },
  { date: '1999-06-01', value: 120.72 },
  { date: '1999-07-01', value: 119.33 },
  { date: '1999-08-01', value: 113.23 },
  { date: '1999-09-01', value: 106.88 },
  { date: '1999-10-01', value: 105.97 },
  { date: '1999-11-01', value: 104.65 },
  { date: '1999-12-01', value: 102.58 },
  { date: '2000-01-01', value: 105.30 },
  { date: '2000-02-01', value: 109.39 },
  { date: '2000-03-01', value: 106.31 },
  { date: '2000-04-01', value: 105.63 },
  { date: '2000-05-01', value: 108.32 },
  { date: '2000-06-01', value: 106.13 },
  { date: '2000-07-01', value: 108.21 },
  { date: '2000-08-01', value: 108.08 },
  { date: '2000-09-01', value: 106.84 },
  { date: '2000-10-01', value: 108.44 },
  { date: '2000-11-01', value: 109.01 },
  { date: '2000-12-01', value: 112.21 },
  { date: '2001-01-01', value: 116.67 },
  { date: '2001-02-01', value: 116.23 },
  { date: '2001-03-01', value: 121.50 },
  { date: '2001-04-01', value: 123.77 },
  { date: '2001-05-01', value: 121.77 },
  { date: '2001-06-01', value: 122.35 },
  { date: '2001-07-01', value: 124.50 },
  { date: '2001-08-01', value: 121.37 },
  { date: '2001-09-01', value: 118.61 },
  { date: '2001-10-01', value: 121.45 },
  { date: '2001-11-01', value: 122.41 },
  { date: '2001-12-01', value: 127.59 },
  { date: '2002-01-01', value: 132.68 },
  { date: '2002-02-01', value: 133.64 },
  { date: '2002-03-01', value: 131.06 },
  { date: '2002-04-01', value: 130.77 },
  { date: '2002-05-01', value: 126.38 },
  { date: '2002-06-01', value: 123.29 },
  { date: '2002-07-01', value: 117.90 },
  { date: '2002-08-01', value: 118.99 },
  { date: '2002-09-01', value: 121.08 },
  { date: '2002-10-01', value: 123.91 },
  { date: '2002-11-01', value: 121.61 },
  { date: '2002-12-01', value: 121.89 },
  { date: '2003-01-01', value: 118.81 },
  { date: '2003-02-01', value: 119.34 },
  { date: '2003-03-01', value: 118.69 },
  { date: '2003-04-01', value: 119.89 },
  { date: '2003-05-01', value: 117.37 },
  { date: '2003-06-01', value: 118.33 },
  { date: '2003-07-01', value: 118.70 },
  { date: '2003-08-01', value: 118.66 },
  { date: '2003-09-01', value: 114.80 },
  { date: '2003-10-01', value: 109.50 },
  { date: '2003-11-01', value: 109.18 },
  { date: '2003-12-01', value: 107.74 },
  { date: '2004-01-01', value: 106.27 },
  { date: '2004-02-01', value: 106.71 },
  { date: '2004-03-01', value: 108.52 },
  { date: '2004-04-01', value: 107.66 },
  { date: '2004-05-01', value: 112.20 },
  { date: '2004-06-01', value: 109.43 },
  { date: '2004-07-01', value: 109.49 },
  { date: '2004-08-01', value: 110.23 },
  { date: '2004-09-01', value: 110.09 },
  { date: '2004-10-01', value: 108.78 },
  { date: '2004-11-01', value: 104.70 },
  { date: '2004-12-01', value: 103.81 },
  { date: '2005-01-01', value: 103.34 },
  { date: '2005-02-01', value: 104.94 },
  { date: '2005-03-01', value: 105.25 },
  { date: '2005-04-01', value: 107.19 },
  { date: '2005-05-01', value: 106.60 },
  { date: '2005-06-01', value: 108.75 },
  { date: '2005-07-01', value: 111.95 },
  { date: '2005-08-01', value: 110.61 },
  { date: '2005-09-01', value: 111.24 },
  { date: '2005-10-01', value: 114.87 },
  { date: '2005-11-01', value: 118.45 },
  { date: '2005-12-01', value: 118.46 },
  { date: '2006-01-01', value: 115.48 },
  { date: '2006-02-01', value: 117.86 },
  { date: '2006-03-01', value: 117.28 },
  { date: '2006-04-01', value: 117.07 },
  { date: '2006-05-01', value: 111.73 },
  { date: '2006-06-01', value: 114.62 },
  { date: '2006-07-01', value: 115.77 },
  { date: '2006-08-01', value: 115.92 },
  { date: '2006-09-01', value: 117.21 },
  { date: '2006-10-01', value: 118.61 },
  { date: '2006-11-01', value: 117.32 },
  { date: '2006-12-01', value: 117.32 },
  { date: '2007-01-01', value: 120.45 },
  { date: '2007-02-01', value: 120.50 },
  { date: '2007-03-01', value: 117.26 },
  { date: '2007-04-01', value: 118.93 },
  { date: '2007-05-01', value: 120.77 },
  { date: '2007-06-01', value: 122.69 },
  { date: '2007-07-01', value: 121.41 },
  { date: '2007-08-01', value: 116.73 },
  { date: '2007-09-01', value: 115.04 },
  { date: '2007-10-01', value: 115.87 },
  { date: '2007-11-01', value: 111.07 },
  { date: '2007-12-01', value: 112.45 },
  { date: '2008-01-01', value: 107.82 },
  { date: '2008-02-01', value: 107.03 },
  { date: '2008-03-01', value: 100.76 },
  { date: '2008-04-01', value: 102.68 },
  { date: '2008-05-01', value: 104.36 },
  { date: '2008-06-01', value: 106.92 },
  { date: '2008-07-01', value: 106.85 },
  { date: '2008-08-01', value: 109.36 },
  { date: '2008-09-01', value: 106.57 },
  { date: '2008-10-01', value: 99.97 },
  { date: '2008-11-01', value: 96.97 },
  { date: '2008-12-01', value: 91.28 },
  { date: '2009-01-01', value: 90.12 },
  { date: '2009-02-01', value: 92.92 },
  { date: '2009-03-01', value: 97.86 },
  { date: '2009-04-01', value: 98.92 },
  { date: '2009-05-01', value: 96.64 },
  { date: '2009-06-01', value: 96.61 },
  { date: '2009-07-01', value: 94.37 },
  { date: '2009-08-01', value: 94.90 },
  { date: '2009-09-01', value: 91.27 },
  { date: '2009-10-01', value: 90.37 },
  { date: '2009-11-01', value: 89.27 },
  { date: '2009-12-01', value: 89.95 },
  { date: '2010-01-01', value: 91.10 },
  { date: '2010-02-01', value: 90.14 },
  { date: '2010-03-01', value: 90.72 },
  { date: '2010-04-01', value: 93.45 },
  { date: '2010-05-01', value: 91.97 },
  { date: '2010-06-01', value: 90.81 },
  { date: '2010-07-01', value: 87.50 },
  { date: '2010-08-01', value: 85.37 },
  { date: '2010-09-01', value: 84.36 },
  { date: '2010-10-01', value: 81.73 },
  { date: '2010-11-01', value: 82.52 },
  { date: '2010-12-01', value: 83.34 },
  { date: '2011-01-01', value: 82.62 },
  { date: '2011-02-01', value: 82.54 },
  { date: '2011-03-01', value: 81.65 },
  { date: '2011-04-01', value: 83.18 },
  { date: '2011-05-01', value: 81.13 },
  { date: '2011-06-01', value: 80.43 },
  { date: '2011-07-01', value: 79.24 },
  { date: '2011-08-01', value: 76.97 },
  { date: '2011-09-01', value: 76.80 },
  { date: '2011-10-01', value: 76.64 },
  { date: '2011-11-01', value: 77.56 },
  { date: '2011-12-01', value: 77.80 },
  { date: '2012-01-01', value: 76.96 },
  { date: '2012-02-01', value: 78.47 },
  { date: '2012-03-01', value: 82.47 },
  { date: '2012-04-01', value: 81.25 },
  { date: '2012-05-01', value: 79.67 },
  { date: '2012-06-01', value: 79.32 },
  { date: '2012-07-01', value: 78.93 },
  { date: '2012-08-01', value: 78.69 },
  { date: '2012-09-01', value: 78.14 },
  { date: '2012-10-01', value: 79.01 },
  { date: '2012-11-01', value: 81.03 },
  { date: '2012-12-01', value: 83.79 },
  { date: '2013-01-01', value: 89.06 },
  { date: '2013-02-01', value: 93.00 },
  { date: '2013-03-01', value: 94.77 },
  { date: '2013-04-01', value: 97.76 },
  { date: '2013-05-01', value: 100.92 },
  { date: '2013-06-01', value: 97.23 },
  { date: '2013-07-01', value: 99.67 },
  { date: '2013-08-01', value: 97.81 },
  { date: '2013-09-01', value: 99.21 },
  { date: '2013-10-01', value: 97.77 },
  { date: '2013-11-01', value: 100.07 },
  { date: '2013-12-01', value: 103.46 },
  { date: '2014-01-01', value: 103.76 },
  { date: '2014-02-01', value: 102.13 },
  { date: '2014-03-01', value: 102.34 },
  { date: '2014-04-01', value: 102.46 },
  { date: '2014-05-01', value: 101.77 },
  { date: '2014-06-01', value: 102.06 },
  { date: '2014-07-01', value: 101.74 },
  { date: '2014-08-01', value: 102.94 },
  { date: '2014-09-01', value: 107.43 },
  { date: '2014-10-01', value: 108.03 },
  { date: '2014-11-01', value: 116.30 },
  { date: '2014-12-01', value: 119.32 },
  { date: '2015-01-01', value: 118.25 },
  { date: '2015-02-01', value: 118.76 },
  { date: '2015-03-01', value: 120.39 },
  { date: '2015-04-01', value: 119.51 },
  { date: '2015-05-01', value: 120.80 },
  { date: '2015-06-01', value: 123.72 },
  { date: '2015-07-01', value: 123.31 },
  { date: '2015-08-01', value: 123.00 },
  { date: '2015-09-01', value: 120.15 },
  { date: '2015-10-01', value: 120.05 },
  { date: '2015-11-01', value: 122.64 },
  { date: '2015-12-01', value: 121.64 },
  { date: '2016-01-01', value: 118.23 },
  { date: '2016-02-01', value: 114.62 },
  { date: '2016-03-01', value: 112.93 },
  { date: '2016-04-01', value: 109.55 },
  { date: '2016-05-01', value: 108.85 },
  { date: '2016-06-01', value: 105.35 },
  { date: '2016-07-01', value: 104.19 },
  { date: '2016-08-01', value: 101.24 },
  { date: '2016-09-01', value: 101.78 },
  { date: '2016-10-01', value: 103.91 },
  { date: '2016-11-01', value: 108.44 },
  { date: '2016-12-01', value: 116.00 },
  { date: '2017-01-01', value: 114.87 },
  { date: '2017-02-01', value: 112.91 },
  { date: '2017-03-01', value: 112.92 },
  { date: '2017-04-01', value: 110.09 },
  { date: '2017-05-01', value: 112.24 },
  { date: '2017-06-01', value: 110.91 },
  { date: '2017-07-01', value: 112.42 },
  { date: '2017-08-01', value: 109.83 },
  { date: '2017-09-01', value: 110.78 },
  { date: '2017-10-01', value: 112.91 },
  { date: '2017-11-01', value: 112.82 },
  { date: '2017-12-01', value: 112.94 },
  { date: '2018-01-01', value: 110.87 },
  { date: '2018-02-01', value: 107.97 },
  { date: '2018-03-01', value: 106.05 },
  { date: '2018-04-01', value: 107.66 },
  { date: '2018-05-01', value: 109.69 },
  { date: '2018-06-01', value: 110.06 },
  { date: '2018-07-01', value: 111.52 },
  { date: '2018-08-01', value: 111.00 },
  { date: '2018-09-01', value: 112.10 },
  { date: '2018-10-01', value: 112.72 },
  { date: '2018-11-01', value: 113.34 },
  { date: '2018-12-01', value: 112.20 },
  { date: '2019-01-01', value: 108.96 },
  { date: '2019-02-01', value: 110.44 },
  { date: '2019-03-01', value: 111.14 },
  { date: '2019-04-01', value: 111.64 },
  { date: '2019-05-01', value: 109.97 },
  { date: '2019-06-01', value: 108.07 },
  { date: '2019-07-01', value: 107.74 },
  { date: '2019-08-01', value: 106.29 },
  { date: '2019-09-01', value: 107.88 },
  { date: '2019-10-01', value: 108.03 },
  { date: '2019-11-01', value: 108.87 },
  { date: '2019-12-01', value: 109.56 },
  { date: '2020-01-01', value: 109.27 },
  { date: '2020-02-01', value: 108.35 },
  { date: '2020-03-01', value: 107.53 },
  { date: '2020-04-01', value: 107.14 },
  { date: '2020-05-01', value: 107.58 },
  { date: '2020-06-01', value: 107.39 },
  { date: '2020-07-01', value: 105.81 },
  { date: '2020-08-01', value: 105.93 },
  { date: '2020-09-01', value: 105.58 },
  { date: '2020-10-01', value: 104.63 },
  { date: '2020-11-01', value: 104.25 },
  { date: '2020-12-01', value: 103.52 },
  { date: '2021-01-01', value: 103.79 },
  { date: '2021-02-01', value: 105.52 },
  { date: '2021-03-01', value: 109.84 },
  { date: '2021-04-01', value: 109.30 },
  { date: '2021-05-01', value: 109.58 },
  { date: '2021-06-01', value: 110.62 },
  { date: '2021-07-01', value: 109.73 },
  { date: '2021-08-01', value: 109.90 },
  { date: '2021-09-01', value: 111.51 },
  { date: '2021-10-01', value: 113.89 },
  { date: '2021-11-01', value: 113.05 },
  { date: '2021-12-01', value: 115.08 },
  { date: '2022-01-01', value: 115.10 },
  { date: '2022-02-01', value: 115.32 },
  { date: '2022-03-01', value: 121.66 },
  { date: '2022-04-01', value: 129.83 },
  { date: '2022-05-01', value: 128.68 },
  { date: '2022-06-01', value: 135.73 },
  { date: '2022-07-01', value: 133.28 },
  { date: '2022-08-01', value: 138.96 },
  { date: '2022-09-01', value: 144.75 },
  { date: '2022-10-01', value: 148.71 },
  { date: '2022-11-01', value: 138.08 },
  { date: '2022-12-01', value: 131.12 },
  { date: '2023-01-01', value: 130.10 },
  { date: '2023-02-01', value: 136.20 },
  { date: '2023-03-01', value: 132.80 },
  { date: '2023-04-01', value: 136.56 },
  { date: '2023-05-01', value: 139.96 },
  { date: '2023-06-01', value: 144.31 },
  { date: '2023-07-01', value: 142.27 },
  { date: '2023-08-01', value: 146.14 },
  { date: '2023-09-01', value: 149.35 },
  { date: '2023-10-01', value: 149.41 },
  { date: '2023-11-01', value: 147.18 },
  { date: '2023-12-01', value: 141.06 },
  { date: '2024-01-01', value: 147.22 },
  { date: '2024-02-01', value: 150.52 },
  { date: '2024-03-01', value: 151.35 },
  { date: '2024-04-01', value: 155.66 },
  { date: '2024-05-01', value: 157.27 },
  { date: '2024-06-01', value: 160.87 },
  { date: '2024-07-01', value: 153.76 },
  { date: '2024-08-01', value: 144.53 },
  { date: '2024-09-01', value: 143.62 },
  { date: '2024-10-01', value: 152.31 },
  { date: '2024-11-01', value: 150.33 },
  { date: '2024-12-01', value: 157.35 },
  { date: '2025-01-01', value: 155.95 },
  { date: '2025-02-01', value: 149.72 },
  { date: '2025-03-01', value: 149.98 },
  { date: '2025-04-01', value: 142.97 },
  { date: '2025-05-01', value: 144.30 },
  { date: '2025-06-01', value: 144.48 },
  { date: '2025-07-01', value: 147.20 },
  { date: '2025-08-01', value: 147.48 },
  { date: '2025-09-01', value: 147.86 },
  { date: '2025-10-01', value: 151.35 },
  { date: '2025-11-01', value: 155.14 },
  { date: '2025-12-01', value: 155.92 },
  { date: '2026-01-01', value: 156.65 },
  { date: '2026-02-01', value: 155.10 },
  { date: '2026-03-01', value: 158.68 },
  { date: '2026-04-01', value: 159.12 },
  { date: '2026-05-01', value: 158.15 },
  { date: '2026-06-01', value: 160.77 },
  { date: '2026-07-01', value: 162.33 },
  { date: '2026-08-01', value: 158.85 },
  { date: '2026-09-01', value: 156.42 },
  { date: '2026-10-01', value: 157.97 },
  { date: '2026-11-17', value: 159.30 },
];

const RANGE_MONTHS = { '1M': 1, '3M': 3, '6M': 6, '1Y': 12, '5Y': 60, '10Y': 120, '20Y': 240, '30Y': 360, '40Y': 480 };
const LATEST_RATE_URL = 'https://api.frankfurter.app/latest?from=USD&to=JPY';
let AS_OF = parseDate(HISTORICAL_DATA[HISTORICAL_DATA.length - 1].date);
const ACCENT = '#6ee7b7';

Chart.defaults.color = '#8b93a7';
Chart.defaults.borderColor = '#2a3040';
Chart.defaults.font.family = "'DM Sans', system-ui, sans-serif";

function parseDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function applyLatestReading(date, value) {
  const rounded = Math.round(value * 100) / 100;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(rounded)) return;
  const last = HISTORICAL_DATA[HISTORICAL_DATA.length - 1];
  if (date < last.date) return;
  const point = { date, value: rounded };
  // Keep month-start averages, and keep a single reading after the latest month.
  if (date === last.date || !last.date.endsWith('-01')) {
    HISTORICAL_DATA[HISTORICAL_DATA.length - 1] = point;
  } else {
    HISTORICAL_DATA.push(point);
  }
  AS_OF = parseDate(date);
}

async function refreshLatestReading() {
  const response = await fetch(LATEST_RATE_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error(String(response.status));
  const body = await response.json();
  applyLatestReading(body.date, body.rates && body.rates.JPY);
}

function filterByRange(range) {
  const months = RANGE_MONTHS[range];
  const cutoff = new Date(AS_OF);
  cutoff.setMonth(cutoff.getMonth() - months);
  const startIdx = HISTORICAL_DATA.findIndex(d => parseDate(d.date) >= cutoff);
  if (startIdx === -1) return [];
  const inRange = HISTORICAL_DATA.slice(startIdx);
  // A mid-month latest reading can leave the 1M window with a single point.
  if (inRange.length === 1 && startIdx > 0) return HISTORICAL_DATA.slice(startIdx - 1);
  return inRange;
}

function formatDate(dateStr, range) {
  const d = parseDate(dateStr);
  if (range === '1M') return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

function formatAsOf(dateStr) {
  return parseDate(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

async function initApp() {
  try {
    await refreshLatestReading();
  } catch (err) {
    // The bundled series stays in place when the rate service is unreachable.
  }
  let currentRange = '1Y';
  let chart = null;

  function getFilteredData() {
    return filterByRange(currentRange);
  }

  function renderSummary(data) {
    const first = data[0];
    const last = data[data.length - 1];
    const high = Math.max(...data.map(d => d.value));
    const low = Math.min(...data.map(d => d.value));
    const change = last.value - first.value;
    const pct = first.value !== 0 ? (change / first.value) * 100 : 0;
    const up = change >= 0;
    const changeClass = up ? 'change-up' : 'change-down';
    const sign = up ? '+' : '';
    const cards = [
      { label: 'Latest rate', value: last.value.toFixed(2), sub: 'JPY per USD' },
      { label: 'Period start', value: first.value.toFixed(2), sub: formatDate(first.date, currentRange) },
      { label: 'High', value: high.toFixed(2), sub: 'In range' },
      { label: 'Low', value: low.toFixed(2), sub: 'In range' },
      { label: 'Change', value: `${sign}${change.toFixed(2)}`, sub: 'Start to latest', valueClass: changeClass },
      { label: '% change', value: `${sign}${pct.toFixed(2)}%`, sub: 'Start to latest', valueClass: changeClass },
    ];
    document.getElementById('summary-grid').innerHTML = cards.map(card => `
      <article class="stat-card">
        <div class="label">${card.label}</div>
        <div class="value${card.valueClass ? ` ${card.valueClass}` : ''}">${card.value}</div>
        <div class="sub">${card.sub}</div>
      </article>
    `).join('');
  }

  function createChart() {
    const canvas = document.getElementById('rateChart');
    const ctx = canvas.getContext('2d');
    const data = getFilteredData();

    if (chart) chart.destroy();

    const gradient = ctx.createLinearGradient(0, 0, 0, 320);
    gradient.addColorStop(0, ACCENT + '55');
    gradient.addColorStop(1, ACCENT + '05');

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => formatDate(d.date, currentRange)),
        datasets: [{
          label: 'USD/JPY',
          data: data.map(d => d.value),
          borderColor: ACCENT,
          backgroundColor: gradient,
          borderWidth: 2,
          pointRadius: data.length > 24 ? 0 : 4,
          pointHoverRadius: 6,
          pointBackgroundColor: ACCENT,
          pointBorderColor: '#171a22',
          pointBorderWidth: 2,
          fill: true,
          tension: 0.3,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1e2230',
            titleColor: '#e8eaef',
            bodyColor: '#e8eaef',
            borderColor: '#2a3040',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            titleFont: { family: Chart.defaults.font.family },
            bodyFont: { family: Chart.defaults.font.family },
            callbacks: {
              label: item => `¥${item.parsed.y.toFixed(2)}`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#8b93a7',
              font: { family: Chart.defaults.font.family, size: 11 },
              maxTicksLimit: 12,
              maxRotation: 0,
            },
            border: { display: false },
          },
          y: {
            grid: { color: '#2a3040' },
            ticks: {
              color: '#8b93a7',
              font: { family: Chart.defaults.font.family, size: 11 },
              callback: value => '¥' + value.toFixed(0),
            },
            border: { display: false },
          }
        }
      }
    });
  }

  function renderTable() {
    const tbody = document.getElementById('rateTableBody');
    const data = getFilteredData();
    tbody.innerHTML = data.map((d, i) => {
      const prev = i > 0 ? data[i - 1].value : d.value;
      const change = d.value - prev;
      const pct = prev !== 0 ? (change / prev * 100) : 0;
      const isUp = change >= 0;
      const arrow = isUp ? '▲' : '▼';
      const changeClass = isUp ? 'change-up' : 'change-down';
      return `<tr>
        <td>${formatDate(d.date, currentRange)}</td>
        <td class="num">¥${d.value.toFixed(2)}</td>
        <td class="num ${changeClass}">${arrow} ${Math.abs(change).toFixed(2)}</td>
        <td class="num ${changeClass}">${isUp ? '+' : ''}${pct.toFixed(2)}%</td>
      </tr>`;
    }).reverse().join('');
  }

  function setRange(range) {
    currentRange = range;
    document.querySelectorAll('.range-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.range === range);
    });
    const data = getFilteredData();
    renderSummary(data);
    createChart();
    renderTable();
  }

  document.querySelectorAll('.range-btn').forEach(btn => {
    btn.addEventListener('click', () => setRange(btn.dataset.range));
  });

  const asOfLabel = formatAsOf(HISTORICAL_DATA[HISTORICAL_DATA.length - 1].date);
  document.getElementById('as-of').textContent = `As of ${asOfLabel}`;
  document.getElementById('latest-reading').textContent = `Monthly USD/JPY rates. Latest reading ${asOfLabel}.`;

  setRange('1Y');
}

initApp();
