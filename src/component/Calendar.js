import React from 'react'
import OneHover from './Hover/OneHover'
import Time from './Time/Tiime'

const Calendar = () => {
  return (
    <div class="flex items-center justify-center min-h-[100vh]">
    <div class="max-w-sm w-full shadow-lg drop-shadow--[0_35px_35px_rgba(110,231,183,0.5)]">
        <div class="p-4 bg-emerald-700 rounded-md">
            <div class="px-4 flex items-center justify-center">
                <span  tabindex="0" class="focus:outline-none  text-base font-bold text-stone-900 hover:text-white">October 2020</span>
                
            </div>

            <div class="flex items-center justify-between pt-12 overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr>
                            
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-stone-900 hover:text-white">Fri</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-stone-900 hover:text-white">Sat</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-stone-900 hover:text-white">Sun</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-stone-900 hover:text-white">Mon</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-stone-900 hover:text-white">Tue</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-stone-900 hover:text-white">Wed</p>
                                </div>
                            </th>
                            <th>
                                <div class="w-full flex justify-center">
                                    <p class="text-base font-medium text-center text-stone-900 hover:text-white">Thu</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>
                                <OneHover data={Time[0].day} />
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">2</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">3</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">4</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">5</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">6</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">7</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">8</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">9</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">10</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">11</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">12</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">13</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">14</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">15</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">16</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">17</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">18</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">19</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">20</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">21</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">22</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">23</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">24</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300 font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">25</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">26</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">27</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">28</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">29</p>
                                </div>
                            </td>
                            <td>
                                <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p class="text-base text-stone-900 hover:text-emerald-300  font-medium hover:bg-[rgba(0,69,66,1)] w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-out hover:ease-in">30</p>
                                </div>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Calendar