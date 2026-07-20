import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  CalendarDays,
  IndianRupee,
  Receipt,
  TrendingUp,
  Download,
  FileSpreadsheet,
  FileText,
  PieChart,
} from "lucide-react";

import {
  getMonthlyReport,
  getYearlyReport,
  downloadMonthlyPdf,
  downloadMonthlyExcel,
} from "../../services/reportService";


export default function Reports() {

  const [monthly, setMonthly] = useState(null);
  const [yearly, setYearly] = useState(null);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    loadReports();
  }, []);


  const loadReports = async () => {

    try {

      const today = new Date();

      const month =
        today.getMonth() + 1;

      const year =
        today.getFullYear();


      const [
        monthlyData,
        yearlyData,
      ] = await Promise.all([

        getMonthlyReport(
          month,
          year
        ),

        getYearlyReport(
          year
        ),

      ]);


      setMonthly(monthlyData);

      setYearly(yearlyData);


    } catch(error){

      console.error(
        "Reports Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };



  const averageDaily =
    useMemo(()=>{

      if(!monthly)
        return 0;


      const days =
        new Date().getDate();


      return Math.round(
        monthly.total_expense / days
      );


    },[monthly]);



  const highestCategory =
    useMemo(()=>{

      if(!monthly?.categories?.length)
        return null;


      return monthly.categories[0];


    },[monthly]);



  const exportPdf = async()=>{

    const today = new Date();

    const response =
      await downloadMonthlyPdf(
        today.getMonth()+1,
        today.getFullYear()
      );


    const url =
      window.URL.createObjectURL(
        new Blob([response.data])
      );


    const link =
      document.createElement("a");


    link.href=url;

    link.download =
      "Expense_Report.pdf";


    link.click();

  };



  const exportExcel = async()=>{

    const today = new Date();

    const response =
      await downloadMonthlyExcel(
        today.getMonth()+1,
        today.getFullYear()
      );


    const url =
      window.URL.createObjectURL(
        new Blob([response.data])
      );


    const link =
      document.createElement("a");


    link.href=url;

    link.download =
      "Expense_Report.xlsx";


    link.click();

  };



  if(loading){

    return (

      <div className="
        flex
        min-h-screen
        items-center
        justify-center
        text-white
      ">
        Loading Reports...
      </div>

    );

  }


  return (

    <div className="
      min-h-screen
      px-6
      pt-4
      pb-32
    ">


      {/* Header */}

      <motion.div

        initial={{
          opacity:0,
          y:15
        }}

        animate={{
          opacity:1,
          y:0
        }}

        className="
          flex
          items-center
          justify-between
        "

      >

        <div>

          <h1 className="
            text-2xl
            font-bold
            text-white
          ">
            Reports
          </h1>


          <p className="
            mt-1
            text-sm
            text-gray-400
          ">
            Track your financial activity
          </p>

        </div>


        <div className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-[#1A1F2B]
          px-3
          py-2
        ">

          <CalendarDays
            size={16}
            className="text-indigo-400"
          />

          <span className="
            text-sm
            text-gray-300
          ">
            {monthly?.month}/
            {monthly?.year}
          </span>

        </div>


      </motion.div>
            {/* Monthly Expense Hero Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="
          mt-6
          rounded-3xl
          bg-gradient-to-br
          from-indigo-600
          via-violet-600
          to-purple-700
          p-6
          shadow-xl
        "
      >

        <div className="flex items-start justify-between">

          <div>

            <p className="
              text-sm
              text-white/70
            ">
              This Month Spending
            </p>


            <h2 className="
              mt-3
              text-4xl
              font-bold
              text-white
            ">
              ₹
              {monthly?.total_expense?.toLocaleString() || 0}
            </h2>


            <div className="
              mt-3
              flex
              items-center
              gap-2
              text-white/80
            ">

              <Receipt size={16}/>

              <span className="text-sm">
                {monthly?.total_transactions || 0}
                {" "}transactions
              </span>

            </div>

          </div>


          <div className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-white/20
          ">

            <IndianRupee
              size={32}
              className="text-white"
            />

          </div>


        </div>


        {/* Monthly Progress */}

        <div className="mt-8">

          <div className="
            flex
            justify-between
            text-xs
            text-white/70
          ">

            <span>
              Monthly Activity
            </span>


            <span>
              {monthly?.categories?.length || 0}
              {" "}categories
            </span>

          </div>


          <div className="
            mt-3
            h-3
            overflow-hidden
            rounded-full
            bg-white/20
          ">

            <motion.div

              initial={{
                width:0,
              }}

              animate={{
                width:"100%",
              }}

              transition={{
                duration:1,
              }}

              className="
                h-full
                rounded-full
                bg-white
              "

            />

          </div>

        </div>


      </motion.div>



      {/* Statistics Cards */}

      <motion.div

        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          delay:0.2,
        }}

        className="
          mt-6
          grid
          grid-cols-2
          gap-4
        "

      >


        {/* Average Daily */}

        <div className="
          rounded-2xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-5
        ">

          <div className="
            flex
            items-center
            gap-2
          ">

            <TrendingUp
              size={18}
              className="text-emerald-400"
            />

            <p className="
              text-xs
              text-gray-400
            ">
              Avg / Day
            </p>

          </div>


          <h3 className="
            mt-3
            text-2xl
            font-bold
            text-white
          ">
            ₹
            {averageDaily.toLocaleString()}
          </h3>

        </div>



        {/* Year Spending */}

        <div className="
          rounded-2xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-5
        ">


          <div className="
            flex
            items-center
            gap-2
          ">

            <PieChart
              size={18}
              className="text-indigo-400"
            />

            <p className="
              text-xs
              text-gray-400
            ">
              Year Total
            </p>


          </div>


          <h3 className="
            mt-3
            text-2xl
            font-bold
            text-white
          ">

            ₹
            {yearly?.total_expense?.toLocaleString() || 0}

          </h3>


        </div>



        {/* Year Transactions */}

        <div className="
          rounded-2xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-5
        ">


          <div className="
            flex
            items-center
            gap-2
          ">

            <Receipt
              size={18}
              className="text-yellow-400"
            />


            <p className="
              text-xs
              text-gray-400
            ">
              Year Transactions
            </p>


          </div>


          <h3 className="
            mt-3
            text-2xl
            font-bold
            text-white
          ">

            {yearly?.total_transactions || 0}

          </h3>


        </div>




        {/* Top Category */}

        <div className="
          rounded-2xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-5
        ">


          <div className="
            flex
            items-center
            gap-2
          ">

            <PieChart
              size={18}
              className="text-purple-400"
            />


            <p className="
              text-xs
              text-gray-400
            ">
              Top Category
            </p>


          </div>


          <h3 className="
            mt-3
            truncate
            text-lg
            font-bold
            text-white
          ">

            {highestCategory?.category || "No Data"}

          </h3>


        </div>


      </motion.div>
            {/* Yearly Spending Trend */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="
          mt-6
          rounded-3xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-6
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <h2 className="
              text-lg
              font-semibold
              text-white
            ">
              Monthly Trend
            </h2>

            <p className="
              mt-1
              text-sm
              text-gray-400
            ">
              Yearly spending overview
            </p>

          </div>


          <TrendingUp
            size={22}
            className="text-indigo-400"
          />

        </div>



        <div className="
          mt-8
          flex
          h-48
          items-end
          gap-3
        ">


          {yearly?.monthly_breakdown?.length ? (

            yearly.monthly_breakdown.map(
              (item) => {

                const max =
                  Math.max(
                    ...yearly.monthly_breakdown.map(
                      (m)=>m.total
                    )
                  );


                const height =
                  max > 0
                    ? (item.total / max) * 100
                    : 0;


                return (

                  <div
                    key={item.month}
                    className="
                      flex
                      flex-1
                      flex-col
                      items-center
                      gap-2
                    "
                  >

                    <motion.div

                      initial={{
                        height:0,
                      }}

                      animate={{
                        height:`${height}%`,
                      }}

                      transition={{
                        duration:0.8,
                      }}

                      className="
                        w-full
                        rounded-t-xl
                        bg-gradient-to-t
                        from-indigo-600
                        to-purple-400
                      "

                    />


                    <span className="
                      text-xs
                      text-gray-500
                    ">
                      {new Date(
                        2026,
                        item.month - 1
                      )
                      .toLocaleString(
                        "default",
                        {
                          month:"short"
                        }
                      )}
                    </span>


                  </div>

                );

              }

            )

          ) : (

            <p className="
              text-sm
              text-gray-400
            ">
              No trend data available
            </p>

          )}

        </div>

      </motion.div>




      {/* Category Breakdown */}


      <motion.div

        initial={{
          opacity:0,
        }}

        animate={{
          opacity:1,
        }}

        transition={{
          delay:0.4,
        }}

        className="
          mt-6
          rounded-3xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-6
        "

      >

        <h2 className="
          text-lg
          font-semibold
          text-white
        ">
          Category Breakdown
        </h2>



        <div className="
          mt-6
          space-y-5
        ">


          {
            monthly?.categories?.map(
              (item)=>{

                const percentage =
                  Math.round(
                    (
                      item.total /
                      monthly.total_expense
                    ) * 100
                  );


                return (

                  <div
                    key={item.category}
                  >


                    <div className="
                      mb-2
                      flex
                      justify-between
                    ">


                      <div>

                        <p className="
                          font-medium
                          text-white
                        ">
                          {item.category}
                        </p>


                        <p className="
                          text-xs
                          text-gray-400
                        ">
                          ₹
                          {item.total.toLocaleString()}
                        </p>

                      </div>


                      <span className="
                        text-sm
                        font-semibold
                        text-indigo-400
                      ">
                        {percentage}%
                      </span>


                    </div>



                    <div className="
                      h-3
                      overflow-hidden
                      rounded-full
                      bg-[#2A3140]
                    ">


                      <motion.div

                        initial={{
                          width:0,
                        }}

                        animate={{
                          width:`${percentage}%`,
                        }}

                        transition={{
                          duration:0.8,
                        }}

                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-indigo-500
                          to-purple-500
                        "

                      />


                    </div>


                  </div>

                );

              }
            )
          }


        </div>


      </motion.div>
            {/* Financial Insights */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
        }}
        className="
          mt-6
          rounded-3xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-6
        "
      >

        <h2 className="
          text-lg
          font-semibold
          text-white
        ">
          Financial Insights
        </h2>


        <div className="
          mt-5
          space-y-4
        ">


          <div className="
            rounded-2xl
            bg-[#262D3D]
            p-4
          ">

            <h3 className="
              font-semibold
              text-indigo-400
            ">
              Highest Spending Category
            </h3>


            <p className="
              mt-2
              text-sm
              leading-6
              text-gray-400
            ">

              {highestCategory
                ? `${highestCategory.category} is your highest spending category with ₹${highestCategory.total.toLocaleString()}.`
                : "No spending data available."
              }

            </p>


          </div>



          <div className="
            rounded-2xl
            bg-[#262D3D]
            p-4
          ">

            <h3 className="
              font-semibold
              text-emerald-400
            ">
              Monthly Activity
            </h3>


            <p className="
              mt-2
              text-sm
              leading-6
              text-gray-400
            ">

              You completed{" "}
              <span className="text-white font-semibold">
                {monthly?.total_transactions}
              </span>{" "}
              transactions this month with total spending of{" "}
              <span className="text-white font-semibold">
                ₹{monthly?.total_expense?.toLocaleString()}
              </span>.

            </p>


          </div>




          <div className="
            rounded-2xl
            bg-[#262D3D]
            p-4
          ">

            <h3 className="
              font-semibold
              text-yellow-400
            ">
              Year Overview
            </h3>


            <p className="
              mt-2
              text-sm
              leading-6
              text-gray-400
            ">

              Your total spending in{" "}
              <span className="text-white font-semibold">
                {yearly?.year}
              </span>{" "}
              is{" "}
              <span className="text-white font-semibold">
                ₹{yearly?.total_expense?.toLocaleString()}
              </span>.

            </p>


          </div>


        </div>

      </motion.div>





      {/* Export Section */}

      <motion.div
        initial={{
          opacity:0,
        }}

        animate={{
          opacity:1,
        }}

        transition={{
          delay:0.6,
        }}

        className="
          mt-6
          rounded-3xl
          border
          border-white/5
          bg-[#1A1F2B]
          p-6
        "
      >

        <h2 className="
          text-lg
          font-semibold
          text-white
        ">
          Export Report
        </h2>


        <p className="
          mt-1
          text-sm
          text-gray-400
        ">
          Download your monthly expense summary
        </p>



        <div className="
          mt-5
          grid
          grid-cols-2
          gap-4
        ">


          <button
            onClick={exportPdf}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-red-500/20
              py-4
              text-red-400
              transition
              hover:bg-red-500/30
              active:scale-95
            "
          >

            <FileText size={18}/>

            PDF

          </button>



          <button
            onClick={exportExcel}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-emerald-500/20
              py-4
              text-emerald-400
              transition
              hover:bg-emerald-500/30
              active:scale-95
            "
          >

            <FileSpreadsheet size={18}/>

            Excel

          </button>


        </div>


      </motion.div>





      {/* Empty State */}

      {
        (!monthly?.total_transactions) && (

          <motion.div

            initial={{
              opacity:0,
              scale:0.95,
            }}

            animate={{
              opacity:1,
              scale:1,
            }}

            className="
              mt-6
              rounded-3xl
              border
              border-dashed
              border-white/10
              bg-[#1A1F2B]
              p-8
              text-center
            "

          >

            <PieChart
              size={48}
              className="
                mx-auto
                text-indigo-400
              "
            />


            <h2 className="
              mt-5
              text-xl
              font-bold
              text-white
            ">
              No Report Data
            </h2>


            <p className="
              mt-3
              text-sm
              text-gray-400
            ">
              Add expenses to generate your financial reports.
            </p>


          </motion.div>

        )
      }


    </div>

  );

}